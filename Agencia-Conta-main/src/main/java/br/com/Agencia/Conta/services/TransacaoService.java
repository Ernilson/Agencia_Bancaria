package br.com.Agencia.Conta.services;

import br.com.Agencia.Conta.entity.Cliente;
import br.com.Agencia.Conta.entity.Transacao;
import br.com.Agencia.Conta.entity.enums.TipoEnum;
import br.com.Agencia.Conta.repository.TransacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
@CrossOrigin("*")
public class TransacaoService {

    @Autowired
    private TransacaoRepository transacaoRepository;

    @Autowired
    private ClienteService clienteService;

    public Transacao salvarTransacao(Long clienteId, Transacao transacao) {
        Cliente cliente = clienteService.obterCliente(clienteId);
        transacao.setCliente(cliente);
        if (TipoEnum.Debito == transacao.getTipo()) {
            double valorNegado = -transacao.getValor();
            transacao.setValor(valorNegado);
        }
        return transacaoRepository.save(transacao);
    }

    public List<Transacao> obterTransacoesPorCliente(Long clienteId) {
        Cliente cliente = clienteService.obterCliente(clienteId);
        return transacaoRepository.findByCliente(cliente);
    }

    public double obterSaldoTotalPorCliente(Long clienteId) {
        Cliente cliente = clienteService.obterCliente(clienteId);
        List<Transacao> transacoes = transacaoRepository.findByCliente(cliente);
        return transacoes.stream()
                .mapToDouble(Transacao::getValor) // Assumindo que getValor() retorna o valor da transação
                .sum();
    }
}