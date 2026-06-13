import { api } from './index';
import type { Cliente } from '../models/types';

export async function listarClientes(): Promise<Cliente[]> {
  const { data } = await api.get<Cliente[]>('/clientes');
  return data;
}

export async function criarCliente(cliente: Omit<Cliente, 'id' | 'dataCadastro'>): Promise<Cliente> {
  const { data } = await api.post<Cliente>('/clientes', cliente);
  return data;
}

export async function atualizarCliente(id: string, cliente: Partial<Cliente>): Promise<Cliente> {
  const { data } = await api.put<Cliente>(`/clientes/${id}`, cliente);
  return data;
}

export async function excluirCliente(id: string): Promise<void> {
  await api.delete(`/clientes/${id}`);
}