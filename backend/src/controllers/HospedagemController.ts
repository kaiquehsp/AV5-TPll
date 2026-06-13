import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export class HospedagemController {

  public async listar(req: Request, res: Response): Promise<Response> {
    try {
      const hospedagens = await prisma.hospedagem.findMany({
        include: {
          cliente: { include: { documentos: true, endereco: true } },
          acomodacao: true,
        },
      });
      return res.status(200).json(hospedagens);
    } catch (error) {
      console.error('[HospedagemController] Erro ao listar:', error);
      return res.status(500).json({ erro: 'Falha ao buscar hospedagens.' });
    }
  }

  public async criar(req: Request, res: Response): Promise<Response> {
    try {
      const clienteId = req.body.clienteId ?? req.body.cliente;
      const acomodacaoId = req.body.acomodacaoId ?? req.body.acomodacao;

      if (!clienteId || !acomodacaoId) {
        return res.status(400).json({ erro: 'clienteId e acomodacaoId são obrigatórios.' });
      }

      const hospedagemAtiva = await prisma.hospedagem.findFirst({
        where: { clienteId, dataSaida: null },
      });
      if (hospedagemAtiva) {
        return res.status(400).json({ erro: 'Este cliente já possui uma hospedagem ativa.' });
      }

      const hospedagem = await prisma.hospedagem.create({
        data: { clienteId, acomodacaoId },
        include: { cliente: true, acomodacao: true },
      });

      return res.status(201).json(hospedagem);
    } catch (error) {
      console.error('[HospedagemController] Erro ao criar:', error);
      return res.status(500).json({ erro: 'Falha ao criar hospedagem.' });
    }
  }

  public async atualizar(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id as string;
      const clienteId = req.body.clienteId ?? req.body.cliente;
      const acomodacaoId = req.body.acomodacaoId ?? req.body.acomodacao;

      if (!clienteId || !acomodacaoId) {
        return res.status(400).json({ erro: 'clienteId e acomodacaoId são obrigatórios.' });
      }

      const hospedagem = await prisma.hospedagem.update({
        where: { id },
        data: { clienteId, acomodacaoId },
        include: { cliente: true, acomodacao: true },
      });

      return res.status(200).json(hospedagem);
    } catch (error) {
      console.error('[HospedagemController] Erro ao atualizar:', error);
      return res.status(500).json({ erro: 'Falha ao atualizar hospedagem.' });
    }
  }

  public async finalizar(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id as string;
      const hospedagem = await prisma.hospedagem.update({
        where: { id },
        data: { dataSaida: new Date() },
        include: { cliente: true, acomodacao: true },
      });
      return res.status(200).json(hospedagem);
    } catch (error) {
      console.error('[HospedagemController] Erro ao finalizar:', error);
      return res.status(500).json({ erro: 'Falha ao finalizar hospedagem.' });
    }
  }

  public async remover(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id as string;
      await prisma.hospedagem.delete({ where: { id } });
      return res.status(204).send();
    } catch (error) {
      console.error('[HospedagemController] Erro ao remover:', error);
      return res.status(500).json({ erro: 'Falha ao remover hospedagem.' });
    }
  }
}