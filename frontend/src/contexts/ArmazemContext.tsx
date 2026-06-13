import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Cliente, Acomodacao, Hospedagem } from '../models/types';
import { listarClientes, criarCliente, atualizarCliente, excluirCliente } from '../services/cliente';
import { listarAcomodacoes, criarAcomodacao, atualizarAcomodacao, excluirAcomodacao } from '../services/acomodacao';
import { listarHospedagens, criarHospedagem, atualizarHospedagem, excluirHospedagem } from '../services/hospedagem';

interface ArmazemContextData {
  clientes: Cliente[];
  acomodacoes: Acomodacao[];
  hospedagens: Hospedagem[];
  loading: boolean;
  adicionarCliente: (cliente: Omit<Cliente, 'id' | 'dataCadastro'>) => Promise<void>;
  atualizarClienteCtx: (id: string, cliente: Partial<Cliente>) => Promise<void>;
  removerCliente: (id: string) => Promise<void>;
  adicionarAcomodacao: (dados: Omit<Acomodacao, 'id'>) => Promise<void>;
  atualizarAcomodacaoCtx: (id: string, dados: Partial<Acomodacao>) => Promise<void>;
  removerAcomodacao: (id: string) => Promise<void>;
  adicionarHospedagem: (clienteId: string, acomodacaoId: string) => Promise<void>;
  atualizarHospedagemCtx: (id: string, clienteId: string, acomodacaoId: string) => Promise<void>;
  removerHospedagem: (id: string) => Promise<void>;
}

const ArmazemContext = createContext<ArmazemContextData>({} as ArmazemContextData);

export const ArmazemProvider = ({ children }: { children: ReactNode }) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [acomodacoes, setAcomodacoes] = useState<Acomodacao[]>([]);
  const [hospedagens, setHospedagens] = useState<Hospedagem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function carregar() {
      try {
        const [c, a, h] = await Promise.all([
          listarClientes(),
          listarAcomodacoes(),
          listarHospedagens(),
        ]);
        setClientes(c);
        setAcomodacoes(a);
        setHospedagens(h);
      } catch (error) {
        console.error('[ArmazemProvider] Erro ao carregar dados iniciais:', error);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  const adicionarCliente = async (clienteSemId: Omit<Cliente, 'id' | 'dataCadastro'>) => {
    const novo = await criarCliente(clienteSemId);
    setClientes(prev => [...prev, novo]);
  };

  const atualizarClienteCtx = async (id: string, dados: Partial<Cliente>) => {
    const atualizado = await atualizarCliente(id, dados);
    setClientes(prev => prev.map(c => c.id === id ? atualizado : c));
  };

  const removerCliente = async (id: string) => {
    await excluirCliente(id); 
    setClientes(prev => prev.filter(c => c.id !== id));
    setHospedagens(prev => prev.filter(h => h.clienteId !== id));
  };

  const adicionarAcomodacao = async (dados: Omit<Acomodacao, 'id'>) => {
    const nova = await criarAcomodacao(dados);
    setAcomodacoes(prev => [...prev, nova]);
  };

  const atualizarAcomodacaoCtx = async (id: string, dados: Partial<Acomodacao>) => {
    const atualizada = await atualizarAcomodacao(id, dados);
    setAcomodacoes(prev => prev.map(a => a.id === id ? atualizada : a));
  };

const removerAcomodacao = async (id: string) => {
  await excluirAcomodacao(id); 
  setAcomodacoes(prev => prev.filter(a => a.id !== id));
};

  const adicionarHospedagem = async (clienteId: string, acomodacaoId: string) => {
    const nova = await criarHospedagem(clienteId, acomodacaoId);
    setHospedagens(prev => [...prev, nova]);
  };

  const atualizarHospedagemCtx = async (id: string, clienteId: string, acomodacaoId: string) => {
    const atualizada = await atualizarHospedagem(id, clienteId, acomodacaoId);
    setHospedagens(prev => prev.map(h => h.id === id ? atualizada : h));
  };

  const removerHospedagem = async (id: string) => {
    await excluirHospedagem(id);
    setHospedagens(prev => prev.filter(h => h.id !== id));
  };

  

  return (
    <ArmazemContext.Provider value={{
      clientes, acomodacoes, hospedagens, loading,
      adicionarCliente, atualizarClienteCtx, removerCliente,
      adicionarAcomodacao, atualizarAcomodacaoCtx, removerAcomodacao,
      adicionarHospedagem, atualizarHospedagemCtx, removerHospedagem,
    }}>
      {children}
    </ArmazemContext.Provider>
  );
};

export const useArmazem = () => {
  const context = useContext(ArmazemContext);
  if (!context) throw new Error('useArmazem deve ser usado dentro de um ArmazemProvider');
  return context;
};