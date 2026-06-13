import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import DiretorSolteiroSimples from '../diretores/diretorSolteiroSimples';
import DiretorSolteiroMais from '../diretores/diretorSolteiroMais';
import DiretorCasalSimples from '../diretores/diretorCasalSimples';
import DiretorFamiliaSimples from '../diretores/diretorFamiliaSimples';
import DiretorFamiliaMais from '../diretores/diretorFamiliaMais';
import DiretorFamiliaSuper from '../diretores/diretorFamiliaSuper';

export class AcomodacaoController {

  public async popular(req: Request, res: Response): Promise<Response> {
    try {
      const quantidade = await prisma.acomodacao.count();
      if (quantidade > 0) {
        return res.status(400).json({ erro: 'As acomodações já foram geradas no banco.' });
      }

      const diretores = [
        new DiretorSolteiroSimples(),
        new DiretorSolteiroMais(),
        new DiretorCasalSimples(),
        new DiretorFamiliaSimples(),
        new DiretorFamiliaMais(),
        new DiretorFamiliaSuper(),
      ];

      const dadosAcomodacoes = diretores.map(diretor => {
        const a = diretor.construir();
        return {
          nomeAcomadacao: String(a.NomeAcomadacao),
          camaCasal:      Number(a.CamaCasal),
          camaSolteiro:   Number(a.CamaSolteiro),
          suite:          Number(a.Suite),
          climatizacao:   Boolean(a.Climatizacao),
          garagem:        Number(a.Garagem),
        };
      });

      await prisma.acomodacao.createMany({ data: dadosAcomodacoes });

      return res.status(201).json({
        sucesso: true,
        mensagem: `${dadosAcomodacoes.length} acomodações geradas com sucesso!`
      });
    } catch (error) {
      console.error('[AcomodacaoController] Erro ao popular:', error);
      return res.status(500).json({ erro: 'Falha interna no servidor.' });
    }
  }

  public async listar(req: Request, res: Response): Promise<Response> {
    try {
      const acomodacoes = await prisma.acomodacao.findMany();
      return res.status(200).json(acomodacoes);
    } catch (error) {
      return res.status(500).json({ erro: 'Falha ao buscar acomodações.' });
    }
  }

  public async criar(req: Request, res: Response): Promise<Response> {
    try {
      const { nomeAcomadacao, camaCasal, camaSolteiro, suite, climatizacao, garagem } = req.body;

      if (!nomeAcomadacao) {
        return res.status(400).json({ erro: 'Nome da acomodação é obrigatório.' });
      }

      const acomodacao = await prisma.acomodacao.create({
        data: { nomeAcomadacao, camaCasal, camaSolteiro, suite, climatizacao, garagem },
      });

      return res.status(201).json(acomodacao);
    } catch (error) {
      console.error('[AcomodacaoController] Erro ao criar:', error);
      return res.status(500).json({ erro: 'Falha ao criar acomodação.' });
    }
  }

  public async atualizar(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id as string;
      const { nomeAcomadacao, camaCasal, camaSolteiro, suite, climatizacao, garagem } = req.body;

      const acomodacao = await prisma.acomodacao.update({
        where: { id },
        data: { nomeAcomadacao, camaCasal, camaSolteiro, suite, climatizacao, garagem },
      });

      return res.status(200).json(acomodacao);
    } catch (error) {
      console.error('[AcomodacaoController] Erro ao atualizar:', error);
      return res.status(500).json({ erro: 'Falha ao atualizar acomodação.' });
    }
  }

public async remover(req: Request, res: Response): Promise<Response> {
  try {
    const id = req.params.id as string;
    const hospedagemAtiva = await prisma.hospedagem.findFirst({
      where: { acomodacaoId: id, dataSaida: null },
    });
    if (hospedagemAtiva) {
      return res.status(400).json({ 
        erro: 'Esta acomodação possui hospedagem ativa e não pode ser removida.' 
      });
    }

    await prisma.acomodacao.delete({ where: { id } });
    return res.status(204).send();
  } catch (error) {
    console.error('[AcomodacaoController] Erro ao remover:', error);
    return res.status(500).json({ erro: 'Falha ao remover acomodação.' });
  }
}
}