import express from 'express';
import cors from 'cors';
import { AcomodacaoController } from './controllers/AcomodacaoController';
import { ClienteController } from './controllers/ClienteController';
import { HospedagemController } from './controllers/HospedagemController';
import prisma from './lib/prisma';
import DiretorSolteiroSimples from './diretores/diretorSolteiroSimples';
import DiretorSolteiroMais from './diretores/diretorSolteiroMais';
import DiretorCasalSimples from './diretores/diretorCasalSimples';
import DiretorFamiliaSimples from './diretores/diretorFamiliaSimples';
import DiretorFamiliaMais from './diretores/diretorFamiliaMais';
import DiretorFamiliaSuper from './diretores/diretorFamiliaSuper';
const app = express();
const PORTA = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const acomodacaoController = new AcomodacaoController();
const clienteController = new ClienteController();
const hospedagemController = new HospedagemController();


app.post('/api/acomodacoes/popular', (req, res) => acomodacaoController.popular(req, res));
app.get('/api/acomodacoes',          (req, res) => acomodacaoController.listar(req, res));
app.get('/api/clientes',             (req, res) => clienteController.listar(req, res));
app.get('/api/clientes/:id',         (req, res) => clienteController.buscarPorId(req, res));
app.post('/api/clientes',            (req, res) => clienteController.criar(req, res));
app.put('/api/clientes/:id',         (req, res) => clienteController.atualizar(req, res));
app.delete('/api/clientes/:id',      (req, res) => clienteController.remover(req, res));
app.get('/api/hospedagens',                     (req, res) => hospedagemController.listar(req, res));
app.post('/api/hospedagens',                    (req, res) => hospedagemController.criar(req, res));
app.patch('/api/hospedagens/:id/finalizar',     (req, res) => hospedagemController.finalizar(req, res));
app.delete('/api/hospedagens/:id',              (req, res) => hospedagemController.remover(req, res));
app.put('/api/acomodacoes/:id',    (req, res) => acomodacaoController.atualizar(req, res));
app.delete('/api/acomodacoes/:id', (req, res) => acomodacaoController.remover(req, res));
app.post('/api/acomodacoes', (req, res) => acomodacaoController.criar(req, res));
app.put('/api/hospedagens/:id', (req, res) => hospedagemController.atualizar(req, res));

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'Atlantis API Operacional via Prisma + SQLite' });
  
});


async function iniciar() {
  const quantidade = await prisma.acomodacao.count();

  if (quantidade === 0) {
    console.log('Nenhuma acomodação encontrada. Gerando via Builder...');

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
    console.log(`${dadosAcomodacoes.length} acomodações geradas com sucesso!`);
  } else {
    console.log(`Banco já possui ${quantidade} acomodação(ões). Seed ignorado.`);
  }

  app.listen(PORTA, () => {
    console.log(`[Atlantis API] Servidor rodando na porta ${PORTA}`);
  });
}

iniciar();