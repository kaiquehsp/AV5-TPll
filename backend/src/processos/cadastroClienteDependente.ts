import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class CadastroClienteDependente extends Processo {
    public processar(): void {
        console.log("\n--- Vincular Dependente a um Titular ---");
        const armazem = Armazem.InstanciaUnica;
        const cpfTitular = this.entrada.receberTexto("Digite o CPF do titular:");
        const titular = armazem.Clientes.find(c => 
            c.Documentos.some(doc => doc.Numero === cpfTitular)
        );

        if (!titular) {
            console.log("Erro: Titular não encontrado com este CPF.");
            return;
        }
        let nome = this.entrada.receberTexto("Nome do dependente:");
        let nomeSocial = this.entrada.receberTexto("Nome social:");
        let dataNascimento = new Date(); 

        const dependente = new Cliente(nome, nomeSocial, dataNascimento);

        titular.Dependentes.push(dependente);
        
        console.log(`Sucesso: ${nome} agora é dependente de ${titular.Nome}.`);
    }
}