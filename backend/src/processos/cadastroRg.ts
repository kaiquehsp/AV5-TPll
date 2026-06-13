import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroRg extends Processo {
    private cliente: Cliente;
    
    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    public processar(): void {
        console.log('\n>>> Cadastro de RG');

        let numero = "";
        while (!/^[0-9A-Za-z]{5,15}$/.test(numero)) {
            numero = this.entrada.receberTexto('Qual o número do RG?');
            if (!/^[0-9A-Za-z]{5,15}$/.test(numero)) console.log("Erro: RG inválido.");
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
        
        const rg = new Documento(numero, TipoDocumento.RG, dataExpedicao);
        this.cliente.Documentos.push(rg);
        
        console.log('[Sucesso] RG validado e vinculado ao cliente!');
    }
}