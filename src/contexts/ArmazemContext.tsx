import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react'; 
import type { Cliente, Acomodacao, Hospedagem } from '../models/types';

interface ArmazemContextData {
  clientes: Cliente[];
  acomodacoes: Acomodacao[];
  hospedagens: Hospedagem[];
  adicionarCliente: (cliente: Cliente) => void;
  atualizarCliente: (cliente: Cliente) => void;
  removerCliente: (id: string) => void;
  adicionarAcomodacao: (acomodacao: Acomodacao) => void;
  adicionarHospedagem: (hospedagem: Hospedagem) => void;
  removerHospedagem: (id: string) => void;
}

const ArmazemContext = createContext<ArmazemContextData>({} as ArmazemContextData);

const mockAcomodacoes: Acomodacao[] = [
  { id: crypto.randomUUID(), nomeAcomadacao: "Casal Simples", camaCasal: 1, camaSolteiro: 0, suite: 1, climatizacao: true, garagem: 1 },
  { id: crypto.randomUUID(), nomeAcomadacao: "Família Mais", camaCasal: 1, camaSolteiro: 2, suite: 1, climatizacao: true, garagem: 2 },
  { id: crypto.randomUUID(), nomeAcomadacao: "Família Simples", camaCasal: 1, camaSolteiro: 2, suite: 0, climatizacao: false, garagem: 1 },
  { id: crypto.randomUUID(), nomeAcomadacao: "Família Super", camaCasal: 2, camaSolteiro: 2, suite: 2, climatizacao: true, garagem: 2 },
  { id: crypto.randomUUID(), nomeAcomadacao: "Solteiro Mais", camaCasal: 0, camaSolteiro: 1, suite: 1, climatizacao: true, garagem: 1 },
  { id: crypto.randomUUID(), nomeAcomadacao: "Solteiro Simples", camaCasal: 0, camaSolteiro: 1, suite: 0, climatizacao: false, garagem: 0 }
];

export const ArmazemProvider = ({ children }: { children: ReactNode }) => {
  const [clientes, setClientes] = useState<Cliente[]>(() => {
    const salvos = localStorage.getItem('@Atlantis:clientes');
    return salvos ? JSON.parse(salvos) : [];
  });

  const [acomodacoes, setAcomodacoes] = useState<Acomodacao[]>(() => {
    const salvas = localStorage.getItem('@Atlantis:acomodacoes');
    return salvas ? JSON.parse(salvas) : mockAcomodacoes;
  });

  const [hospedagens, setHospedagens] = useState<Hospedagem[]>(() => {
    const salvas = localStorage.getItem('@Atlantis:hospedagens');
    return salvas ? JSON.parse(salvas) : [];
  });

  useEffect(() => localStorage.setItem('@Atlantis:clientes', JSON.stringify(clientes)), [clientes]);
  useEffect(() => localStorage.setItem('@Atlantis:acomodacoes', JSON.stringify(acomodacoes)), [acomodacoes]);
  useEffect(() => localStorage.setItem('@Atlantis:hospedagens', JSON.stringify(hospedagens)), [hospedagens]);

  const adicionarCliente = (cliente: Cliente) => setClientes((prev) => [...prev, cliente]);
  
  const atualizarCliente = (clienteAtualizado: Cliente) => {
    setClientes((prev) => prev.map(c => c.id === clienteAtualizado.id ? clienteAtualizado : c));
  };

  const removerCliente = (id: string) => {
    setClientes((prev) => prev.filter(c => c.id !== id));
    setHospedagens((prev) => prev.filter(h => h.clienteId !== id));
  };

  const adicionarAcomodacao = (acomodacao: Acomodacao) => setAcomodacoes((prev) => [...prev, acomodacao]);

  const adicionarHospedagem = (hospedagem: Hospedagem) => setHospedagens((prev) => [...prev, hospedagem]);
  
  const removerHospedagem = (id: string) => {
    setHospedagens((prev) => prev.filter(h => h.id !== id));
  };

  return (
    <ArmazemContext.Provider value={{ 
      clientes, acomodacoes, hospedagens, 
      adicionarCliente, atualizarCliente, removerCliente,
      adicionarAcomodacao, adicionarHospedagem, removerHospedagem 
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