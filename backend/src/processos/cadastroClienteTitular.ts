import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastrarDocumentosCliente from "./cadastroDocumentosCliente";

export default class CadastroClienteTitular extends Processo {
    public processar(): void {
        console.log('\n--- Cadastro de Cliente Titular ---');
        let nome = "";
        while (nome.length < 2 || /\d/.test(nome)) {
            nome = this.entrada.receberTexto('Qual o nome do novo cliente?');
            if (nome.length < 2 || /\d/.test(nome)) {
                console.log("Erro: Nome inválido (mínimo 2 letras, sem números).");
            }
        }

        let nomeSocial = this.entrada.receberTexto('Qual o nome social?');
        let dataValida = false;
        let dataNascimento: Date = new Date();
        
        while (!dataValida) {
            let dataStr = this.entrada.receberTexto('Data de nascimento (dd/mm/aaaa):');
            let [dia, mes, ano] = dataStr.split('/').map(Number);
            
            dataNascimento = new Date(ano, mes - 1, dia);
            
            let dataExisteNoCalendario = dataNascimento.getDate() === dia && 
                                         dataNascimento.getMonth() === (mes - 1) && 
                                         dataNascimento.getFullYear() === ano;

            if (dataExisteNoCalendario && dataNascimento <= new Date()) {
                dataValida = true;
            } else {
                console.log("Erro: Data inexistente (ex: 40/10) ou no futuro. Tente novamente.");
            }
        }

        let cliente = new Cliente(nome, nomeSocial, dataNascimento);

        new CadastroEnderecoTitular(cliente).processar();
        new CadastrarDocumentosCliente(cliente).processar();

        Armazem.InstanciaUnica.Clientes.push(cliente);
        console.log('\n[Sucesso] Cliente cadastrado!');
    }
}