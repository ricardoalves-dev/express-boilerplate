import express from 'express';

const server = express();
server.use(express.json());
server.listen(9000, () => {
    console.log('Servidor rodando na porta 9000')
});