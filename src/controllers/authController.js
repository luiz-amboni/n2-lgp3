const express = require('express');

const dadosLogin = require('../service/dadosLogin')

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
   let { email } = req.body;
   
    try {
        if (await User.findOne({ email })){
            return res.status(400).send({ error: 'User alredy exists'});
        }
        let user = await User.create(req.body);
        
        user.password = undefined;
        console.log('Deu certo');
        return res.send({ user });

   } catch (err) {
       console.log('Deu erro');
       return res.status(400).send({ error: 'Registrarion failed' });
   }
});

router.post('/authenticate', async(req, res) => {
    let { login, senha } = req.body;
    try{
        let autenticacao = await dadosLogin.fazAutenticacao(login, senha);
        return res.send({ autenticacao })
    }catch (err) {
        return res.status(401).send({ error: err.message });
    }
});

module.exports = app => app.use('/auth', router);