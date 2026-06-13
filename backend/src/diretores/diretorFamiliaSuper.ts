import Diretor from "../abstracoes/diretor";
import Acomodacao from "../modelos/acomodacao";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {
    constructor() { super(); this.construtor = new ConstrutorAcomodacao(); }

    public construir(): Acomodacao {
        const construtorQuarto = this.construtor as ConstrutorAcomodacao;
        construtorQuarto.NomeAcomodacao = NomeAcomadacao.FamiliaSuper;
        construtorQuarto.CamaSolteiro = 6;
        construtorQuarto.CamaCasal = 2;
        construtorQuarto.Suite = 3;
        construtorQuarto.Climatizacao = true;
        construtorQuarto.Garagem = 2;
        return construtorQuarto.construir();
    }
}