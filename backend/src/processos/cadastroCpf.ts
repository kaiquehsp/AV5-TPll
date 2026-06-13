import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroCpf extends Processo {
    private cliente: Cliente;
    
    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    public processar(): void {
        console.log('\n>>> Cadastro de CPF');

        let numero = "";
        while (!/^\d{11}$/.test(numero)) {
            numero = this.entrada.receberTexto('Qual o número do CPF (apenas 11 números)?');
            if (!/^\d{11}$/.test(numero)) console.log("Erro: O CPF deve conter exatamente 11 dígitos numéricos.");
        }

        let dataValida = false;
        let dataExpedicao: Date = new Date();
        
        while (!dataValida) {
            let dataStr = this.entrada.receberTexto('Data de expedição (dd/mm/aaaa):');
            let [dia, mes, ano] = dataStr.split('/').map(Number);
            dataExpedicao = new Date(ano, mes - 1, dia);
            let dataExiste = dataExpedicao.getDate() === dia && 
                             dataExpedicao.getMonth() === (mes - 1) && 
                             dataExpedicao.getFullYear() === ano;

            if (dataExiste && dataExpedicao <= new Date()) {
                dataValida = true;
            } else {
                console.log("Erro: Data inexistente ou no futuro. Tente novamente.");
            }
        }
        
        const cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao);
        this.cliente.Documentos.push(cpf); 
        
        console.log('[Sucesso] CPF validado e vinculado ao cliente!');
    }
}