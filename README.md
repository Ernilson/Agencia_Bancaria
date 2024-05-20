# Desafio IBM

### Inicializar API
```bash
## Inicie os serviços definidos no arquivo docker-compose.yaml
cd docker
docker-compose up
```

### Inicializar APP
```bash
ng server --open
```

### A API fornece os seguintes endpoints:
```bash
POST /api/clientes

POST /api/transacoes/cliente/{clienteId}

GET /api/clientes

GET /api/clientes/{id}

GET /api/transacoes/cliente/{clienteId}

GET /saldo/{clienteId}

```


### Tecnologias Utilizadas
#### API
- Java 17
- Spring Boot
- Maven
- Apache Tomcat
- Banco de Dados PostgreSQL
- JUnit 5 e Mockito
- Docker

#### APP
- Angular CLI 16.2.14
- Node: 18.13.0
- npm 8.19.3
- Angular Material

### Telas:

#### Cadastro de clientes
![tela 1](https://github.com/Ernilson/Agencia-Conta/assets/30840118/8ac50204-853d-49fd-8c4a-c78cb329aa3c)

#### Lista de clientes
![tela 2](https://github.com/Ernilson/Agencia-Conta/assets/30840118/f38bbe5d-c304-4e86-a81c-925c7752765f)

#### Nova Transação
![tela 3](https://github.com/Ernilson/Agencia-Conta/assets/30840118/783f9aad-3362-4419-91c6-91fc5ae6410b)

#### Extrato
![tela 4](https://github.com/Ernilson/Agencia-Conta/assets/30840118/0012d6d3-761f-41b0-bf64-bd6e7d90b898)

<br>



## Autor
Ernilson Daniel
