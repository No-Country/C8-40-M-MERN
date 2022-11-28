<h1 align="center">Library</h1>

# Sobre el proyecto:

➔ Plataforma para acceder a distintos tipos de recursos (videos, documentos e imágenes) relacionados con programación. El proyecto fue pensado para que desarrolladores cuenten con una plataforma a donde recurrir cuando buscan material para documentarse o solucionar problemas técnicos. La plataforma brindaría beneficios ya que nuclea recursos de múltiples fuentes, los recursos estarían verificados y actualizados y, la plataforma contaría con filtrar para que la búsqueda sea eficiente.

# Estructura:

➔ Cliente: React.

➔ Server: Node, MongoDB, Express, Mongoose, JWT, crypto.

➔ Testing: Mocha, Chai.

➔ Documentación: Swagger.

➔ Deploy: Vercel.

<h2 align="center">Api Rest (Backend)</h2>

# Start:

(producción):

https://c8-40-m-mern-kappa.vercel.app/api/

(local):

➔ npm install

➔ npm run dev

http://localhost:3001/api/

# Petición HTTP - Endpoints:

<h4 align="center">Rutas Auth</h4>

- POST auth/register

Registro:

URL:

      auth/register

Estructura request body:

      {
      "userName":"TestUser", (debe ser único)
      "email":"mail@mail.com",
      "password":"Password1",
      "avatar":"https://url.jpg"
      }

Estructura respuesta:

      {
      "message": "user created",
      "data": {
        "user": {
          "userName": "TestUser10",
          "email": "user10@mail.com",
          "avatar": "https://res.cloudinary.com/dxpndulok/image/upload/v1666038626/18_jhzwwd_02354deba2.jpg",
          "isActive": true,
          "role": "dev",
          "post": [],
          "createdAt": "2022-11-28T05:43:22.991Z",
          "updatedAt": "2022-11-28T05:43:22.991Z",
          "id": "63844a7aa4baeb15f68234e6"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQ0YTdhYTRiYWViMTVmNjgyMzRlNiIsInVzZXJOYW1lIjoiVGVzdFVzZXIxMCIsInJvbGUiOiJkZXYiLCJpYXQiOjE2Njk2MTQyMDMsImV4cCI6MTY2OTg3MzQwM30.wwZfGV9fkDckgPnTYyvgtFP5F2KNCxSr8bNne0EJGOE"
        }
      }

- POST auth/login

Login:

URL:

      auth/login

Estructura request body:

      {
      "email":"mail@mail.com",
      "password":"Password1",
      }

Estructura respuesta:

      {
      "message": "successfull login",
      "data": {
        "user": {
          "_id": "63844a7aa4baeb15f68234e6"
          "userName": "TestUser10",
          "email": "user10@mail.com",
          "avatar": "https://res.cloudinary.com/dxpndulok/image/upload/v1666038626/18_jhzwwd_02354deba2.jpg",
          "isActive": true,
          "role": "dev",
          "post": [{},{}...],
          "createdAt": "2022-11-28T05:43:22.991Z",
          "updatedAt": "2022-11-28T05:43:22.991Z",
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQ0YTdhYTRiYWViMTVmNjgyMzRlNiIsInVzZXJOYW1lIjoiVGVzdFVzZXIxMCIsInJvbGUiOiJkZXYiLCJpYXQiOjE2Njk2MTQyMDMsImV4cCI6MTY2OTg3MzQwM30.wwZfGV9fkDckgPnTYyvgtFP5F2KNCxSr8bNne0EJGOE"
        }
      }

<h4 align="center">Rutas Posts</h4>

- GET /posts

Obtiene todos los posts de la base de datos:

URL:

      /posts

QUERIES:

      page (número):

el número de página. por defecto 1.

      limit (número):

el número de documentos por página. por defecto 10.

      sort (asc|desc):

la forma de ordenamiento a partir de la creación de los posts. por defecto descendente.

      search (string):

filtro de coincidencia no exacta para el titulo y la descripcion de los posts.

      queries anidados (criterio: string):

filtro (coincidencia exacta) por title, description, resource (image|document|video), date, ranking (número), url, createdAt, updatedAt

      queries anidados (criterio: id):

filtro (coincidencia exacta) por user, category, programmingL, technology, tag

Estructura respuesta:

      {
        "message": "all posts",
        "data": {
          "docs": [
            {
              "title": "post updated",
              "description": "prueba prueba prueba prueba prueba prueba 42",
              "resource": "video",
              "url": "https:rence",
              "date": "03-11-2022",
              "user": {
                "_id": "638291d2874433ca9ff658f4",
                "userName": "TestUser4"
              },
              "category": {
                "_id": "637f960df3ee5834ef0180de",
                "name": "frontend"
              },
              "programming_l": "6380dbfcf3ee5834ef5176fe",
              "technology": {
                "_id": "637bfb4e199c418abc177317",
                "name": "node"
              },
              "tag": {
                "_id": "638120adf3ee5834ef38faa3",
                "name": "article"
              },
              "createdAt": "2022-09-25T15:29:52.173Z",
              "updatedAt": "2022-11-25T21:55:01.346Z",
              "__v": 0,
              "ranking": 2.5,
              "id": "6380df6f4bcaf87c3e9a5e0d"
            }
          ],
          "totalDocs": 8,
          "limit": 10,
          "totalPages": 1,
          "page": 1,
          "pagingCounter": 1,
          "hasPrevPage": false,
          "hasNextPage": false,
          "prevPage": null,
          "nextPage": null
        }
      }

<h4 align="center">Ruta Documentación</h4>

- GET /docs

Documentación con Swagger.

URL:

      /docs

( ͡~ ͜ʖ ͡°)
