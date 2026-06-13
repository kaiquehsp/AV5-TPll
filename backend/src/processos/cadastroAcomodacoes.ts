import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";

export default class CadastroAcomodacoes extends Processo {
    public processar(): void {
        const armazem = Armazem.InstanciaUnica;
        if (armazem.Acomodacoes.length > 0) return;

        const diretores = [
            new DiretorSolteiroSimples(),
            new DiretorSolteiroMais(),
            new DiretorCasalSimples(),
            new DiretorFamiliaSimples(),
            new DiretorFamiliaMais(),
            new DiretorFamiliaSuper()
        ];

        diretores.forEach(diretor => {
            armazem.Acomodacoes.push(diretor.construir());
        });
    }
}