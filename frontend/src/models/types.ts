export type NomeAcomadacao = string;

export type TipoDocumento = "CPF" | "RG" | "Passaporte";

export interface Telefone {
    id: string;
    ddd: string;
    numero: string;
}

export interface Documento {
    id: string;
    numero: string;
    tipo: TipoDocumento;
    dataExpedicao: Date | string;
}

export interface Endereco {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    codigoPostal: string;
}

export interface Acomodacao {
    id: string;
    nomeAcomadacao: NomeAcomadacao;
    camaSolteiro: number;
    camaCasal: number;
    suite: number;
    climatizacao: boolean;
    garagem: number;
}

export interface Cliente {
    id: string;
    nome: string;
    nomeSocial: string;
    dataNascimento: Date | string;
    dataCadastro: Date | string;
    telefones: Telefone[];
    endereco?: Endereco;
    documentos: Documento[];
    titularId?: string;
}

export interface Hospedagem {
    id: string;
    clienteId: string;
    acomodacaoId: string;
    dataEntrada: Date | string;
    dataSaida?: Date | string;
    //a
}