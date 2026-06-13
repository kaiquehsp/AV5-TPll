import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export class ClienteController {

  public async listar(req: Request, res: Response): Promise<Response> {
    try {
      const clientes = await prisma.cliente.findMany({
        include: { documentos: true, endereco: true, telefones: true },
      });
      return res.status(200).json(clientes);
    } catch (error) {
      console.error('[ClienteController] Erro ao listar:', error);
      return res.status(500).json({ erro: 'Falha ao buscar clientes.' });
    }
  }

  public async buscarPorId(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id as string;
      const cliente = await prisma.cliente.findUnique({
        where: { id },
        include: { documentos: true, endereco: true, telefones: true },
      });
      if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado.' });
      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ erro: 'Falha ao buscar cliente.' });
    }
  }

  public async criar(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, nomeSocial, dataNascimento, documentos, endereco, telefones } = req.body;

      const nascimento = new Date(dataNascimento);
      if (nascimento > new Date()) {
        return res.status(400).json({ erro: 'Data de nascimento não pode ser no futuro.' });
      }

      const cliente = await prisma.cliente.create({
        data: {
          nome,
          nomeSocial,
          dataNascimento: nascimento,
          documentos: documentos
            ? { create: documentos.map((doc: any) => ({
                tipo: doc.tipo,
                numero: doc.numero,
                dataExpedicao: doc.dataExpedicao ? new Date(doc.dataExpedicao) : new Date(),
              }))}
            : undefined,
          endereco: endereco ? { create: endereco } : undefined,
          telefones: telefones && telefones.length > 0
            ? { create: telefones.map((t: any) => ({
                ddd: t.ddd,
                numero: t.numero,
              }))}
            : undefined,
        },
        include: { documentos: true, endereco: true, telefones: true },
      });

      return res.status(201).json(cliente);
    } catch (error) {
      console.error('[ClienteController] Erro ao criar:', error);
      return res.status(500).json({ erro: 'Falha ao criar cliente.' });
    }
  }

  public async atualizar(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id as string;
      const { nome, nomeSocial, dataNascimento, telefones } = req.body;

      if (dataNascimento && new Date(dataNascimento) > new Date()) {
        return res.status(400).json({ erro: 'Data de nascimento não pode ser no futuro.' });
      }

      // Atualiza dados básicos
      const cliente = await prisma.cliente.update({
        where: { id },
        data: {
          nome,
          nomeSocial,
          dataNascimento: dataNascimento ? new Date(dataNascimento) : undefined,
        },
        include: { documentos: true, endereco: true, telefones: true },
      });

      // Atualiza telefones: deleta os antigos e recria
      if (telefones !== undefined) {
        await prisma.telefone.deleteMany({ where: { clienteId: id } });
        if (telefones.length > 0) {
          await prisma.telefone.createMany({
            data: telefones.map((t: any) => ({
              ddd: t.ddd,
              numero: t.numero,
              clienteId: id,
            })),
          });
        }
      }

      // Busca o cliente atualizado com telefones novos
      const clienteAtualizado = await prisma.cliente.findUnique({
        where: { id },
        include: { documentos: true, endereco: true, telefones: true },
      });

      return res.status(200).json(clienteAtualizado);
    } catch (error) {
      console.error('[ClienteController] Erro ao atualizar:', error);
      return res.status(500).json({ erro: 'Falha ao atualizar cliente.' });
    }
  }

  public async remover(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id as string;

      const hospedagemAtiva = await prisma.hospedagem.findFirst({
        where: { clienteId: id, dataSaida: null },
      });
      if (hospedagemAtiva) {
        return res.status(400).json({
          erro: 'Este hóspede possui hospedagem ativa e não pode ser removido.'
        });
      }

      await prisma.cliente.delete({ where: { id } });
      return res.status(204).send();
    } catch (error) {
      console.error('[ClienteController] Erro ao remover:', error);
      return res.status(500).json({ erro: 'Falha ao remover cliente.' });
    }
  }
}