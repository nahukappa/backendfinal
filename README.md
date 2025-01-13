# Adoption API Project

Este es un proyecto para gestionar adopciones de mascotas. Los endpoints permiten obtener, agregar y gestionar adopciones.

## Tecnologías usadas
- Node.js
- Express
- Jest (para pruebas)
- Swagger (para documentación)

## Endpoints disponibles

### `GET /api/adoptions`
Devuelve todas las adopciones.

### `GET /api/adoptions/{id}`
Devuelve una adopción por su ID.

### `POST /api/adoptions`
Agrega una nueva adopción.

## Documentación de la API
La documentación de la API está disponible en [Swagger UI](http://localhost:5000/api-docs).

## Docker

Este proyecto está dockerizado. Puedes construir y ejecutar la imagen con los siguientes comandos:

1. Construir la imagen:
   ```bash
   docker build -t adoption-api .
