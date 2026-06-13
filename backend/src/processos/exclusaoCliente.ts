import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExclusaoCliente extends Processo {
    public processar(): void {
        console.log("\n--- Exclusão de Cliente Titular ---");
        const cpfExcluir = this.entrada.receberTexto("Digite o CPF do cliente para remover:");
        const index = Armazem.InstanciaUnica.Clientes.findIndex(c => 
            c.Documentos.some(d => d.Numero === cpfExcluir)
        );

        if (index !== -1) {
            const clienteAlvo = Armazem.InstanciaUnica.Clientes[index];
            const confirma = this.entrada.receberTexto(`ATENÇÃO: Confirmar exclusão de ${clienteAlvo.Nome}? (S/N)`);
            
            if (confirma.toUpperCase() === 'S') {
                Armazem.InstanciaUnica.Clientes.splice(index, 1);
                console.log(`\n[Sucesso] Registro de ${clienteAlvo.Nome} expurgado da base de dados.`);
            } else {
                console.log("\nOperação de exclusão cancelada pelo usuário.");
            }
        } else {
            console.log("Erro: Cliente não encontrado. Verifique o CPF informado.");
        }
    }
}