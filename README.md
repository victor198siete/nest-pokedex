<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

#Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Generar resource API

```
nest g res pokemon --no-spec
```

6. Instalación de mongoose

```
npm install --save @nestjs/mongoose mongoose
```

7. Instalación de librerias para validacion

```
npm install class-validator class-transformer
```

7.1 Clonar el archivo **.env.template** y renombrar la copia a **.env**

7.2 Llenar las variables de entorno

7.3 Ejecutar la aplicacion en de

`npm run start:dev`

8. Construir la Base de Datos con la Semilla

```
http://localhost:3000/api/v2/seed
```

## Stack Usado

- MongoDB
- NestJS
