import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class CadastroPassaporte extends Processo {
    private cliente: Cliente;
    
    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    public processar(): void {
        console.log('\n>>> Cadastro de Passaporte');

        let numero = "";
        while (!/^[A-Za-z]{2}\d{6,7}$/.test(numero)) {
            numero = this.entrada.receberTexto('Número do passaporte (Ex: AA123456):');
            if (!/^[A-Za-z]{2}\d{6,7}$/.test(numero)) console.log("Erro: Padrão inválido. Use 2 letras e números.");
        }

        let dataValida = false;
        let dataExpedicao: Date = new Date();
        
        while (!dataValida) {
            let dataStr = this.entrada.receberTexto('Data de emissão (dd/mm/aaaa):');
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
        
        const passaporte = new Documento(numero, TipoDocumento.Passaporte, dataExpedicao);
        this.cliente.Documentos.push(passaporte);
        
        console.log('[Sucesso] Passaporte validado e vinculado ao cliente!');
    }
}