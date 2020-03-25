const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3333);

/*
app.get('/', (request, response) => {
    return response.send('Hello, World!');
});
*/

/* Rota / recurso */

/*
    Métodos HTTP:

    *GET: Buscar/listar informação no back-end
    *POST: Criar um informação no back-end
    *PUT: Alterar uma informação no back-end
    *DELETE: Deletar um informação no back-end

*/
/*
    Tipo de parâmetros:
    
    Query  Params: Parâmetros nomeado enviados na rota "?" (Filtros, paginação)
    Route Params: Paramêtros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para cirar ou alterar recursos

*/


/*
    Query  Params

    http://localhost:3333/users?name=Misael
    http://localhost:3333/users?name=Misael&idade=20

app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana omnistack 11.0',
        aluno: 'Diego Fernanades'
    });
});
*/

/*
    Route Params

    http://localhost:3333/users/1

app.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana omnistack 11.0',
        aluno: 'Diego Fernanades'
    });
});

*/
/*

Request body

http://localhost:3333/users

app.use(express.json());

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana omnistack 11.0',
        aluno: 'Misael gonçalves dos santos'
    });
});
*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
*/
