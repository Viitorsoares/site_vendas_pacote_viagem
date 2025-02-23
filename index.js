import express from 'express';
import process from 'process';
import path from 'path';
import session from 'express-session';
import autenticar from './security/authenticate.js';

const host = '0.0.0.0';
const porta = 3000;

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'ChAvEsEcReTa',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000 * 15
    }
}))

app.post('/login', (requisicao, resposta)=> {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if (usuario && senha && usuario === 'Vitor' && senha === '123') {
        requisicao.session.usuarioLogado = true;
        resposta.redirect('/index.html');
    } else {
        resposta.redirect('/login.html');
    }
})

app.use(express.static(path.join(process.cwd(), 'public')));

app.use(autenticar, express.static(path.join(process.cwd(), 'private')));

app.listen(porta, host, ()=> {
    console.log(`Servidor escutando em http://${host}:${porta}`);
})
