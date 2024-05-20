package br.com.Agencia.Conta.controller;

import br.com.Agencia.Conta.entity.Cliente;
import br.com.Agencia.Conta.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("*")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public Cliente criarCliente(@RequestBody Cliente cliente) {
        return clienteService.salvarCliente(cliente);
    }

    @GetMapping("/{id}")
    public Cliente obterCliente(@PathVariable Long id) {
        return clienteService.obterCliente(id);
    }

    @GetMapping
    public List<Cliente> obterTodosClientes() {
        return clienteService.obterTodos();
    }
}




