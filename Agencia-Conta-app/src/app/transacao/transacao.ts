export class Transacao{
    id: number;
    dataOperacao: string;
    tipo: string;
    valor: number;
    idcliente: number;

    constructor(id: number = 0, dataOperacao: string, tipo: string = '', valor: number = 0, idcliente: number) {
        this.id = id;
        this.dataOperacao = dataOperacao;
        this.tipo = tipo;
        this.valor = valor;
        this.idcliente = idcliente;
    }
}