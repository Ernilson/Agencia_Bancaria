import { Component, OnInit } from '@angular/core';
import { Transacao } from './transacao';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente.service';
import { TransacaoService } from '../transacao.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})

export class TransacaoComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  transacoes: Transacao[] = [];
  colunas = ['dataOperacao', 'tipo', 'valor']
  idCliente: number = 0; 
  cliente: Cliente | undefined; 
  saldoTotal: number = 0;

  constructor(
    private service: TransacaoService,
    private fb: FormBuilder,    
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
    
  ){}  

  ngOnInit(): void {    
    this.idCliente = this.route.snapshot.params['id'];  
    this.montarFormulario();
    this.obterSaldoTotal();
    this.listarTransacoes();    
    this.clienteService.obterCliente(this.idCliente).subscribe((cliente: Cliente) => {
      this.cliente = cliente;
      console.log("Cliente: " + JSON.stringify(cliente));

    });
  }

  montarFormulario(){
    this.formulario = this.fb.group({
      tipo: ['', Validators.required],
      valor: ['', Validators.required],           
    })
  } 

  listarTransacoes() {
    this.service.list(this.idCliente).subscribe(response => {
      this.transacoes = response;
      this.obterSaldoTotal();
    });
  }  

  submit() {
    const formValues = this.formulario.value;
    const transacao = new Transacao(formValues.id, formValues.dataOperacao,formValues.tipo, formValues.valor, formValues.idcliente);

    console.log("Transação: " + JSON.stringify(transacao));

    this.service.save(this.idCliente, transacao).subscribe(
        resposta => {
          this.listarTransacoes()
            this.snackBar.open('A transação foi adicionada!', 'Sucesso', {
                duration: 2000
            });
            this.formulario.reset();
        },
        error => {
            console.error("Erro ao adicionar transação: ", error);
            this.snackBar.open('Erro ao adicionar a transação!', 'Erro', {
                duration: 2000
            });
        }
    );
}

obterSaldoTotal() {
  this.service.obterSaldoTotalPorCliente(this.idCliente).subscribe(
    saldo => {
      this.saldoTotal = saldo;
      console.log("total: " + saldo)
    },
    error => {
      console.error("Erro ao obter saldo total: ", error);
    }
  );
}

cancelarEdicao() {    
  this.router.navigate(['/']);
}  

}
