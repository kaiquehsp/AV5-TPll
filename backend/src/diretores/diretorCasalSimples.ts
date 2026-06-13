import Diretor from "../abstracoes/diretor";
import Acomodacao from "../modelos/acomodacao";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class DiretorCasalSimples extends Diretor<Acomodacao> {
    constructor() { super(); this.construtor = new ConstrutorAcomodacao(); }

    public construir(): Acomodacao {
        const construtorQuarto = this.construtor as ConstrutorAcomodacao;
        construtorQuarto.NomeAcomodacao = NomeAcomadacao.CasalSimples;
        construtorQuarto.CamaSolteiro = 0;
        construtorQuarto.CamaCasal = 1;
        construtorQuarto.Suite = 1;
        construtorQuarto.Climatizacao = true;
        construtorQuarto.Garagem = 1;
        return construtorQuarto.construir();
    }
}