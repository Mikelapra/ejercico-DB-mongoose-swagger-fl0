const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express')//añadido por doumentación Clase Swagger
const docs = require('./docs/index')//añadido por doumentación Clase Swagger
app.use(express.json());

app.use('/', routes);

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))//añadido por doumentación Clase Swagger

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));