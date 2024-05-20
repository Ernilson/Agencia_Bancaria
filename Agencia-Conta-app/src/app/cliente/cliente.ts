export class Cliente{
    id: number;
    nome: string;
    idade: number;
    email: string ;
    numeroConta: string;

    constructor(id: number, nome: string,  idade: number, email: string, numeroConta: string) {        
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.numeroConta = numeroConta;
}
}