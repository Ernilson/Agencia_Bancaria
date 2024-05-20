import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  clientes: Cliente[] = [];
  colunas = ['id', 'nome', 'idade', 'email', 'numeroConta', 'trasacao']

  constructor(
    private service: ClienteService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
    
  ){}  

  ngOnInit(): void {    
    this.montarFormulario();
    this.listarContatos();
  }

  montarFormulario(){
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numeroConta: ['', Validators.required],
    })
  } 

  listarContatos(){
    this.service.list().subscribe(response => {
      this.clientes = response;
    })
  }

  submit(){
    const formValues = this.formulario.value
    const cliente = new Cliente(formValues.id, formValues.nome, formValues.idade, formValues.email, formValues.numeroConta)
    this.service.save(cliente).subscribe( resposta => {
      this.listarContatos()       
       this.snackBar.open('O Contato foi adicionado!', 'Sucesso', {
        duration: 2000
       })   
       this.formulario.reset(); 
      })
  }

  criarTransacao(cliente: Cliente){
    this.router.navigate(['/criar-transacao', cliente.id]);
  }
}
