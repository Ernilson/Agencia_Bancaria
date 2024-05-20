package br.com.Agencia.Conta.services;

import br.com.Agencia.Conta.entity.Cliente;
import br.com.Agencia.Conta.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
@CrossOrigin("*")
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente obterCliente(Long id) {
        return clienteRepository.findById(id).orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

    }

    public List<Cliente> obterTodos() {
        return clienteRepository.findAll();
    }
}