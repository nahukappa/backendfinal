// src/swagger/swaggerDef.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Adoption API',
      version: '1.0.0',
      description: 'API for managing pet adoptions',
    },
  },
  apis: ['./src/routes/adoption.router.js'], // Ruta de los archivos que contienen los comentarios de Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
