package br.com.Agencia.Conta.controller;

import br.com.Agencia.Conta.entity.Transacao;
import br.com.Agencia.Conta.services.TransacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transacoes")
@CrossOrigin("*")
public class TransacaoController {

    @Autowired
    private TransacaoService transacaoService;

    @PostMapping("/cliente/{clienteId}")
    public Transacao criarTransacao(@PathVariable Long clienteId, @RequestBody Transacao transacao) {
        return transacaoService.salvarTransacao(clienteId, transacao);
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Transacao> obterTransacoes(@PathVariable Long clienteId) {
        return transacaoService.obterTransacoesPorCliente(clienteId);
    }

    @GetMapping("/saldo/{clienteId}")
    public double obterSaldoTotalPorCliente(@PathVariable Long clienteId) {
        return transacaoService.obterSaldoTotalPorCliente(clienteId);
    }

}
