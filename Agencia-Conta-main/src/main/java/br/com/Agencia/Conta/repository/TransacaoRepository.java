package br.com.Agencia.Conta.repository;

import br.com.Agencia.Conta.entity.Cliente;
import br.com.Agencia.Conta.entity.Transacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransacaoRepository extends JpaRepository<Transacao, Long> {

    List<Transacao> findByCliente(Cliente cliente);
}
