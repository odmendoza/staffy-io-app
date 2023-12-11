
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
La estructura del proyecto deberá estar conformada por los siguientes microservicios:

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

## Architecture

![staffy io app drawio](https://user-images.githubusercontent.com/11874274/201136328-4f4d40c6-7ca5-413f-9626-419f47e2ba94.png)

## Clone

```bash
$ git clone https://github.com/odmendoza/staffy-io-app.git
```

## Installation

```bash
$ npm install
```

## Run with Docker Compose

```bash
$ docker compose up --build -V
```

## Staffy.io app

Applications were documented with Swagger. You can find them at:

### Employees microservice

[http://localhost:3000/api/docs](http://localhost:3000/api/docs)

- Employees CRUD

![Screenshot from 2022-11-10 09-49-14](https://user-images.githubusercontent.com/11874274/201136580-35e4d75a-3dd2-4e5e-9dca-b79994da9c23.png)

### Reports microservice

[http://localhost:3030/api/docs](http://localhost:3030/api/docs)

- Register a entry or exit employee

![Screenshot from 2022-11-10 10-30-50](https://user-images.githubusercontent.com/11874274/201137057-c6a04795-da93-4d60-be0a-c4a202232ca8.png)

Responses

![Screenshot from 2022-11-10 10-32-17](https://user-images.githubusercontent.com/11874274/201137381-d99a30e7-db6d-4ae4-b266-e6c8e8951f48.png)

- Generate reports

![image](https://user-images.githubusercontent.com/11874274/201137689-f82f5dae-f108-4d4f-80dc-1e516781a581.png)

Responses

![image](https://user-images.githubusercontent.com/11874274/201137890-77eed6d7-b99b-49e6-90cb-60af1e5be7da.png)

## Stay in touch

- Author - [Danilo Mendoza](https://github.com/odmendoza)
- Email - [danilo.mendozacapa@gmail.com](mailto:danilo.mendozacapa@gmail.com)

## License

[MIT licensed](LICENSE).
