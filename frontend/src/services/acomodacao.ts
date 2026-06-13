import { api } from './index';
import type { Acomodacao } from '../models/types';

export async function listarAcomodacoes(): Promise<Acomodacao[]> {
  const { data } = await api.get<Acomodacao[]>('/acomodacoes');
  return data;
}

export async function popularAcomodacoes(): Promise<void> {
  await api.post('/acomodacoes/popular');
}

export async function criarAcomodacao(dados: Omit<Acomodacao, 'id'>): Promise<Acomodacao> {
  const { data } = await api.post<Acomodacao>('/acomodacoes', dados);
  return data;
}

export async function atualizarAcomodacao(id: string, dados: Partial<Acomodacao>): Promise<Acomodacao> {
  const { data } = await api.put<Acomodacao>(`/acomodacoes/${id}`, dados);
  return data;
}

export async function excluirAcomodacao(id: string): Promise<void> {
  await api.delete(`/acomodacoes/${id}`);
}