import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Hospedagem from "../modelos/hospedagem";

export default class RegistroHospedagem extends Processo {
    public processar(): void {
        console.log("\n--- Registro de Hospedagem (Check-in) ---");
        
        const armazem = Armazem.InstanciaUnica;
        if (armazem.Clientes.length === 0) {
            console.log("Erro: Não há clientes cadastrados para realizar o check-in.");
            return;
        }
        if (armazem.Acomodacoes.length === 0) {
            console.log("Erro: Não há acomodações disponíveis no hotel.");
            return;
        }

        console.log("\nClientes Disponíveis:");
        armazem.Clientes.forEach((c, index) => console.log(`[${index}] ${c.Nome}`));
        const idxCliente = this.entrada.receberNumero("Selecione o índice do cliente titular:");
        console.log("\nAcomodações Disponíveis:");
        armazem.Acomodacoes.forEach((a, index) => console.log(`[${index}] ${a.NomeAcomadacao}`));
        const idxAcomodacao = this.entrada.receberNumero("Selecione o índice da acomodação desejada:");

        const clienteSelecionado = armazem.Clientes[idxCliente];
        const acomodacaoSelecionada = armazem.Acomodacoes[idxAcomodacao];

        if (clienteSelecionado && acomodacaoSelecionada) {
            const novaHospedagem = new Hospedagem(clienteSelecionado, acomodacaoSelecionada);
            armazem.Hospedagens.push(novaHospedagem);
            console.log(`\n[Sucesso] Check-in concluído! ${clienteSelecionado.Nome} está hospedado em ${acomodacaoSelecionada.NomeAcomadacao}.`);
        } else {
            console.log("\nErro: Índice de cliente ou acomodação inválido. Operação cancelada.");
        }
    }
}