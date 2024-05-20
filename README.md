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
- JUnit 5
- Docker

#### APP
- Angular CLI 16.2.14
- Node: 18.13.0
- npm 8.19.3
- Angular Material

### Telas:

#### Cadastro de clientes
![tela 1](https://github.com/Ernilson/Agencia_Bancaria/assets/30840118/b8aad890-212f-42cf-94d2-72addf991b3b)

#### Lista de clientes
![tela 2](https://github.com/Ernilson/Agencia_Bancaria/assets/30840118/53e1a108-bd43-4a84-9df3-e4056f4b53b4)

#### Nova Transação
![tela 3](https://github.com/Ernilson/Agencia_Bancaria/assets/30840118/27f3d3b2-ec02-41df-ac27-3ab98127ae10)

#### Extrato
![tela 4](https://github.com/Ernilson/Agencia_Bancaria/assets/30840118/2e695ee5-943b-4bb8-a14a-3160a46ca1d6)

<br>



## Autor
Ernilson Daniel
