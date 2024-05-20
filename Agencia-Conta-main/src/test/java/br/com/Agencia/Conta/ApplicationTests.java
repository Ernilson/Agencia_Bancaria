package br.com.Agencia.Conta;

import br.com.Agencia.Conta.entity.Cliente;
import br.com.Agencia.Conta.entity.Transacao;
import br.com.Agencia.Conta.services.ClienteService;
import br.com.Agencia.Conta.services.TransacaoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import br.com.Agencia.Conta.entity.enums.TipoEnum;

@SpringBootTest
class ApplicationTests {

	@Autowired
	private ClienteService service;

	@Autowired
	private TransacaoService transacaoService;

	@Test
	void ClientesContext() {
		var cliente = new Cliente();
		cliente.setNome("teste");
		cliente.setEmail("teste@teste.com");
		cliente.setIdade(20);
		cliente.setNumeroConta("123456");

		service.salvarCliente(cliente);
	}

	@Test
	void TransactionContext(){
		Cliente cliente = new Cliente();
		cliente.setId(1L);
		cliente.setNome("João da Silva");

		var transaction = new Transacao();
		transaction.setValor(3.02);
		transaction.setTipo(TipoEnum.Credito);
		transaction.setCliente(cliente);

		transacaoService.salvarTransacao(1l,transaction);

	}

}
