const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


exports.fazAutenticacao = async (email, password)=>{
    try {
        let user = await User.findOne({ email }).select('+password');

        if (!user){
            throw new Error('User not found');
        }
        
        if (!await bcrypt.compare(password, user.password)){
            throw new Error('Invalid password');
        }

        user.password = undefined;

        let token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400,
        })
        return token;

    }catch(err){
        throw new Error(err);
    }
}
