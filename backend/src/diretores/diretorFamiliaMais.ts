import Diretor from "../abstracoes/diretor";
import Acomodacao from "../modelos/acomodacao";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {
    constructor() { super(); this.construtor = new ConstrutorAcomodacao(); }

    public construir(): Acomodacao {
        const construtorQuarto = this.construtor as ConstrutorAcomodacao;
        construtorQuarto.NomeAcomodacao = NomeAcomadacao.FamiliaMais;
        construtorQuarto.CamaSolteiro = 5;
        construtorQuarto.CamaCasal = 1;
        construtorQuarto.Suite = 2;
        construtorQuarto.Climatizacao = true;
        construtorQuarto.Garagem = 2;
        return construtorQuarto.construir();
    }
}