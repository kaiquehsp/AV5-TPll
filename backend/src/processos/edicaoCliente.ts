import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class EdicaoCliente extends Processo {
    public processar(): void {
        console.log("\n--- Edição de Cliente Titular ---");
        const cpfBusca = this.entrada.receberTexto("Digite o numero do documento do cliente que deseja editar:");
        
        const cliente = Armazem.InstanciaUnica.Clientes.find(c => 
            c.Documentos.some(d => d.Numero === cpfBusca)
        );

        if (cliente) {
            console.log(`\nCliente localizado: ${cliente.Nome}`);
            
            let novoNome = this.entrada.receberTexto(`Novo nome (Atual: ${cliente.Nome} - Pressione Enter para manter):`);
            if (novoNome.length >= 2 && !/\d/.test(novoNome)) {
                cliente.Nome = novoNome;
                console.log("Nome atualizado!");
            }

            let novoNomeSocial = this.entrada.receberTexto(`Novo nome social (Atual: ${cliente.NomeSocial} - Pressione Enter para manter):`);
            if (novoNomeSocial.length >= 2 && !/\d/.test(novoNomeSocial)) {
                cliente.NomeSocial = novoNomeSocial;
                console.log("Nome social atualizado!");
            }

            console.log("\n[Sucesso] Edição finalizada com sucesso!");
        } else {
            console.log("Erro: Nenhum cliente localizado com esse CPF na base de dados.");
        }
    }
}