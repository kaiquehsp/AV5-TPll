import Diretor from "../abstracoes/diretor";
import Acomodacao from "../modelos/acomodacao";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class DiretorFamiliaSimples extends Diretor<Acomodacao> {
    constructor() { super(); this.construtor = new ConstrutorAcomodacao(); }

    public construir(): Acomodacao {
        const construtorQuarto = this.construtor as ConstrutorAcomodacao;
        construtorQuarto.NomeAcomodacao = NomeAcomadacao.FamiliaSimples;
        construtorQuarto.CamaSolteiro = 2;
        construtorQuarto.CamaCasal = 1;
        construtorQuarto.Suite = 1;
        construtorQuarto.Climatizacao = true;
        construtorQuarto.Garagem = 1;
        return construtorQuarto.construir();
    }
}