import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ListagemHospedagens extends Processo {
    public processar(): void {
        console.clear();
        console.log("--- Relatório de Hospedagens Ativas ---");
        
        const hospedagens = Armazem.InstanciaUnica.Hospedagens;

        if (hospedagens.length === 0) {
            console.log("\nAviso: O hotel está vazio no momento. Nenhuma hospedagem registrada.");
        } else {
            hospedagens.forEach((h, index) => {
                const nomeCliente = h.cliente?.Nome || "Cliente não identificado";
                const nomeQuarto = h.acomodacao?.NomeAcomadacao || "Acomodação não identificada";
                const dataIn = h.dataEntrada ? h.dataEntrada.toLocaleString('pt-BR') : "Data não disponível";

                console.log(`\n[Registro ${index}]`);
                console.log(`Hóspede Titular: ${nomeCliente}`);
                console.log(`Acomodação: ${nomeQuarto}`);
                console.log(`Data de Entrada: ${dataIn}`);
                console.log(`-----------------------------------------------`);
            });
        }
        console.log("\n");
        this.entrada.receberTexto("Pressione ENTER para voltar ao menu principal...");
    }
}