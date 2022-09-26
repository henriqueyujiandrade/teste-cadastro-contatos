# Teste Técnico cadastro

- [Teste Técnico cadastro](#teste-técnico-cadastro)
  - [1. Sobre](#1-sobre)
  - [2. Documentação API](#2-documentação-api)
  - [3. Tecnologias](#3-tecnologias)
  - [4. Instalação](#4-instalação)
    - [4.1 Requisitos](#41-requisitos)
    - [4.2 Instalação](#42-instalação)
  - [5. Desenvolvedor](#5-desenvolvedor)

<a name="sobre"></a>

## 1. Sobre

DevTech é um projeto que foi desenvolvido no quarto módulo do curso de Desenvolvimento Full Stack da Kenzie Academy Brasil, onde colocamos em prática o aprendizado técnico adquirido durante o módulo e as habilidades interpessoais ao trabalhar em equipe. A aplicação é uma API que simula a API de uma rede social, permitindo o usuário fazer cadastro de uma conta, login, cadastro de postagens, comentários em postagens, responder os comentários etc.

<a name="links"></a>

## 2. Documentação API

→ <a name="doc-devtech" href="https://github.com/henriqueyujiandrade/teste-cadastro-contatos" target="_blank">Documentação em desenvolvimento</a>

<a name="techs"></a>

## 3. Tecnologias

### 3.1 Front End (client)

- _TypeScript_
- _ReactJS_
- _ContextAPI_
- _Styled-Components_
- _Axios_
- _yup_
- _react-hook-form_
- _react-router-dom_


### 3.2 Back End (server)
- _TypeScript_
- _NodeJS_
- _Express_
- _TypeORM_
- _PostgreSQL_

<a name="instalacao"></a>

## 4. Instalação

### 4.1 Requisitos

- Gerenciador de pacotes Yarn
- Banco de dados PostgreSQL

### 4.2 Instalação

4.2.1 - Crie um novo banco com nome de sua preferência no PostgreSQL

4.2.2 - Entre na pasta 'server'. Instale as dependências requisitadas para o projeto utilizando o Yarn

`yarn`

4.2.3 Crie um arquivo na raiz do projeto chamado .env e altere as variáveis de ambiente conforme o .env.example do projeto

exemplo:
```
DB_HOST='localhost'
DB_PASSWORD='1234'
DB='meu_banco'
DB_USER='meuuser'
SECRET_KEY='abcdefghij'
```

4.2.4 Para rodar o projeto utilize o comando `yarn dev` no terminal, se tudo der certo receberá uma mensagem como essa:

      query: SELECT * FROM current_schema()
      query: CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
      query: SHOW server_version;
      Running at http://localhost:3333

4.2.5 Mantenha esse terminal aberto rodando na porta 3333. Agora abra um novo terminal e entre na pasta 'client', instale as dependências com o comando 'yarn' da mesma forma, e depois de instalado, rode o comando 'yarn start'. Você deverá ver uma mensagem como essa:

```
You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.20:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully
No issues found.
```

4.2.6 O site deverá abrir automaticamente no seu navegador, caso não abra, entre no navegador e acesse o 'site' 'http://localhost:3000'.

<a name="devs"></a>

## 6. Desenvolvedor

- <a name="henrique" href="https://www.linkedin.com/in/henriqueyujiandrade/" target="_blank">Henrique Andrade</a>

