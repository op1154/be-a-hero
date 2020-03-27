// Importando o módulo express para a várivel express
const express = require('express');

// Criando a aplicação
const app = express();

// Criando a primeira rota
app.get('/', (request, response) => {
    return response.json(
        {
            evento: 'Semana OmniStack 11.0',
            aluno: 'Christian'
        }
    );
});

// Ouvindo a porta 3333
app.listen(3333);