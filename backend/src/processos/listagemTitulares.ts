import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ListagemTitulares extends Processo {
    public processar(): void {
        console.clear();
        console.log("--- Lista de Clientes Titulares ---");
        
        const clientes = Armazem.InstanciaUnica.Clientes;

        if (clientes.length === 0) {
            console.log("\nAviso: Nenhum cliente cadastrado no sistema.");
        } else {
            clientes.forEach((cliente: Cliente, index: number) => {
                let stringDocumentos = "";
                if (cliente.Documentos.length > 0) {
                    stringDocumentos = cliente.Documentos.map(d => `${d.Tipo}: ${d.Numero}`).join(" | ");
                } else {
                    stringDocumentos = "Nenhum documento cadastrado";
                }
                
                console.log(`\n[Índice: ${index}]`);
                console.log(`Nome: ${cliente.Nome} | Nome Social: ${cliente.NomeSocial}`);
                console.log(`Documentos: ${stringDocumentos}`);
                console.log(`Dependentes: ${cliente.Dependentes.length}`);
                console.log(`-----------------------------------------------`);
            });
        }
        console.log("\n");
        this.entrada.receberTexto("Pressione ENTER para voltar ao menu principal...");
    }
}