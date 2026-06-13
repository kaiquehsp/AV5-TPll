import Diretor from "../abstracoes/diretor";
import Acomodacao from "../modelos/acomodacao";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class DiretorSolteiroSimples extends Diretor<Acomodacao> {
    constructor() { 
        super(); 
        this.construtor = new ConstrutorAcomodacao(); 
    }

    public construir(): Acomodacao {
        const construtorQuarto = this.construtor as ConstrutorAcomodacao;
        
    construtorQuarto.NomeAcomodacao = NomeAcomadacao.SolteiroSimples;
    construtorQuarto.CamaSolteiro = 1;
    construtorQuarto.CamaCasal = 0;
    construtorQuarto.Suite = 1;
    construtorQuarto.Climatizacao = true;
    construtorQuarto.Garagem = 0;
        
        return construtorQuarto.construir();
    }
}