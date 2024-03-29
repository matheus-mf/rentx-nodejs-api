<h1 align="center">API Node.js par RentX</h1>

## Tecnologias

- [ESLint e Prettier](https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779)
- [commitlint](https://commitlint.js.org/)
- [husky](https://yarnpkg.com/package/husky)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://yarnpkg.com/package/ts-node-dev)
- [multer](https://github.com/expressjs/multer)
- [CSV Parse](https://csv.js.org/parse/)
- [Swagger UI Express](https://yarnpkg.com/package/swagger-ui-express)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [TypeORM](https://typeorm.io/)
- [TSyringe](https://github.com/microsoft/tsyringe)
- [bcrypt](https://yarnpkg.com/package/bcrypt)
- [Day.js](https://day.js.org/)
- [JWT](https://jwt.io/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest#readme)

---

## Iniciar projeto via Docker

### Criar e iniciar configurações

`docker-compose up`

### Iniciar serviços

`docker-compose start`

### logs

`docker logs SERVICE -f`

### Para serviços

`docker-compose stop`

### Para e remover as configurações

`docker-compose down`

---

## Diagramação

![Esquema banco de dados](.github/diagrama.png)

---

## Requisitos e Regras de negócio

- **RF**: Requisitos Funcionais;
- **RNF**: Requisitos Não Funcionais;
- **RN**: Regras de negócio.

### Cadastro de Carro
 
#### RF
- [x] Deve ser possível cadastro um novo carro.

#### RN
- [x] Não deve ser possível cadastro um carro com a placa já existente;
- [x] O carro pode padrão, deve ser cadastrado com disponível;
- [x] O usuário responsável pelo cadastro deve ser um administrado.


### Listagem de Carro
 
#### RF
- [x] Deve ser possível listar todos os carros disponíveis.
- [x] Deve ser possível listar todos os carros disponíveis através do nome da categoria;
- [x] Deve ser possível listar todos os carros disponíveis através do nome da marca;
- [x] Deve ser possível listar todos os carros disponíveis através do nome do carro.

#### RN
- [x] O usuário não precisa estar autenticado para lista os carros.


### Cadastro de especificação no carro
 
#### RF
- [x] Deve ser possível cadastrar uma especificação para um carro.

#### RN
- [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
- [x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
- [x] O usuário responsável pelo cadastro deve ser um administrado.


### Cadastro de imagens do carro

#### RF
- [x] Deve ser possível a imagem do carro;

#### RNF
- [x] Utilizar o multer para envio dos arquivos.

#### RN
- [x] O usuário deve ser capaz de cadastrar mais de uma imagem para o mesmo carro;
- [x] O usuário responsável pelo cadastro deve ser um administrado.


### Aluguel de carro

#### RF
- [x] Deve ser possível cadastra um aluguel.

#### RN
- [x] O aluguel deve ter duração minima de 24 hora;
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro;
- [x] O usuário deve estar logado na aplicação;
- [x] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.


### Devolução de carro

#### RF
- [x] Deve ser possível realizar a devolução de um aluguel.

#### RN
- [x] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diário completa;
- [x] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel;
- [x] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel;
- [x] Ao realizar a devolução, deverá ser calculado o total do aluguel;
- [x] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso;
- [x] O usuário deve estar logado na aplicação;
- [x] Caso haja multa, deverá ser somado ao total do aluguel.


### Listagem de alugueis para usuário

#### RF
- [x] Deve ser possível realizar a busca de todos os alugueis para o usuário.

#### RN
- [x] O aluguel deve estar logado na aplicação;


### Recuperar Senha

#### RF
- [ ] Deve ser possível o usuário recuperar a senha informando o e-mail;
- [ ] O usuário deve receber um e-mail com o passo a passo para a recuperação de senha;
- [ ] O usuário deve conseguir inserir uma nova senha.

#### RN
- [ ] O usuário precisa informar um nova senha;
- [ ] O link enviado para a recuperação deve expirar em 3 horas.