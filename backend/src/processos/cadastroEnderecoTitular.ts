import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class CadastroEnderecoTitular extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    public processar(): void {
        console.log('\n--- Coletando dados de endereço ---');
        let rua = "";
        while (rua.length < 2 || /\d/.test(rua)) {
            rua = this.entrada.receberTexto("Qual a rua?");
            if (rua.length < 2 || /\d/.test(rua)) {
                console.log("Erro: A rua deve ter no mínimo 2 letras e não pode conter números.");
            }
        }

        let bairro = "";
        while (bairro.length < 2 || /\d/.test(bairro)) {
            bairro = this.entrada.receberTexto("Qual o bairro?");
            if (bairro.length < 2 || /\d/.test(bairro)) {
                console.log("Erro: O bairro deve ter no mínimo 2 letras e não pode conter números.");
            }
        }

        let cidade = this.entrada.receberTexto("Qual a cidade?");
        let estado = this.entrada.receberTexto("Qual o estado?");
        let pais = "";
        while (pais.length < 2 || /\d/.test(pais)) {
            pais = this.entrada.receberTexto("Qual o país?");
            if (pais.length < 2 || /\d/.test(pais)) {
                console.log("Erro: O país deve ter no mínimo 2 letras e não pode conter números.");
            }
        }
        let cep = "";
        while (!/^\d+$/.test(cep)) {
            cep = this.entrada.receberTexto("Qual o código postal (apenas números)?");
            if (!/^\d+$/.test(cep)) {
                console.log("Erro: O código postal deve conter apenas números.");
            }
        }
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, cep);
        
        this.cliente.Endereco = endereco;
        
        console.log('\n[Sucesso] Endereço vinculado ao cliente com sucesso!');
    }
}