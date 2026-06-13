import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem"; 

export default class Armazem {
    private static instancia: Armazem;
    private clientes: Cliente[] = [];
    private acomodacoes: Acomodacao[] = [];
    private hospedagens: Hospedagem[] = []; 

    private constructor() {}

    public static get InstanciaUnica() { 
        if (!this.instancia) {
            this.instancia = new Armazem();
        }
        return this.instancia;
    }
    public get Clientes() { return this.clientes; }
    public get Acomodacoes() { return this.acomodacoes; }
    public get Hospedagens() { return this.hospedagens; }
}