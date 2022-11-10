<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

Se tiene la necesidad de llevar el control de sus empleados, es decir, la hora
de entrada y de salida, para esto, se solicita desarrollar los servicios back-end con los
siguientes requisitos:
1. El sistema dedealabe ser únicamente administrado por el encargado del personal de
   recursos humanos, esto significa que, en el sistema solo podrá iniciar sesión un
   usuario y un rol (USUARIO ADMIN).
2. El sistema debe permitir al USUARIO ADMIN realizar un CRUD completo de los
   empleados.
3. El sistema debe permitir al USUARIO ADMIN, registrar una entrada y una salida, estos
   registros estarán ligados a los empleados.
4. El sistema debe permitir mostrar al front-end, un reporte de cuantas horas ha
   trabajado un empleado, en la semana y el mes.

### Datos Técnicos
La estructura del proyecto deberá estar conformada por los siguientes microservicios, tal
como se muestra en la siguiente imagen:

### Microservicio A.
- Administración del USUARIO ADMIN y empleados.
- CRUD de empleados.
- Inicio de sesión del USUARIO ADMIN

### Microservicio B.
- Registro de entrada y salidas de los empleados.
- Generación de data para los reportes que se detalla en los requisitos (inciso 4).

Los microservicios A y B, tendrán una base de datos independiente y los endpoint deberán
estar englobados dentro de su respectivo microservicio y controladores.

Implementa una comunicación utilizando el
Message Broker RabbitMQ, esta comunicación será utilizada por el Microservicio B,
desde donde se enviará el identificador del empleado al cual se le va a registrar una
entrada o salida, dicho identificador será recibido por el Microservicio A, el cual
validará que el identificador recibido corresponda a un empleado registrado en su
base de datos, el Microservicio A deberá responder afirmativa o negativamente
dependiendo caso y dependiendo de esta respuesta, el Microservicio B registrará o
no la entrada o salida.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Architecture

## Run with Docker Compose

```bash
docker comporose up --build -V
```

## Staffy.io app

Applications were documented with Swagger. You can find them at:

### Employees microservice

[http://localhost:3000/api/docs](http://localhost:3000/api/docs)

- Employees CRUD

### Reports microservice

[http://localhost:3030/api/docs](http://localhost:3030/api/docs)

- Register a entry or exit employee
- Generate reports

## Stay in touch

- Author - [Danilo Mendoza](https://github.com/odmendoza)
- Email - [danilo.mendozacapa@gmail.com](mailto:danilo.mendozacapa@gmail.com)

## License

[MIT licensed](LICENSE).
