import { api } from './index';
import type { Hospedagem } from '../models/types';

export async function listarHospedagens(): Promise<Hospedagem[]> {
  const { data } = await api.get<Hospedagem[]>('/hospedagens');
  return data;
}

export async function criarHospedagem(clienteId: string, acomodacaoId: string): Promise<Hospedagem> {
  const { data } = await api.post<Hospedagem>('/hospedagens', { clienteId, acomodacaoId });
  return data;
}

export async function atualizarHospedagem(id: string, clienteId: string, acomodacaoId: string): Promise<Hospedagem> {
  const { data } = await api.put<Hospedagem>(`/hospedagens/${id}`, { clienteId, acomodacaoId });
  return data;
}

export async function finalizarHospedagem(id: string): Promise<Hospedagem> {
  const { data } = await api.patch<Hospedagem>(`/hospedagens/${id}/finalizar`);
  return data;
}

export async function excluirHospedagem(id: string): Promise<void> {
  await api.delete(`/hospedagens/${id}`);
}