import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    public cliente: Cliente;
    public acomodacao: Acomodacao;
    public dataEntrada: Date;

    constructor(cliente: Cliente, acomodacao: Acomodacao) {
        this.cliente = cliente;
        this.acomodacao = acomodacao;
        this.dataEntrada = new Date();
    }
}