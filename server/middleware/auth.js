const config = require('config');
const jwt = require('jsonwebtoken');

//Middleware for private route 
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    //Check for token
    if(!token){
        res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try{
        //Verify Token
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        //Add User from Payload
        req.user = decoded;
        next();
    }
    catch(e){
        res.status(400).json({ msg: 'Token is not valid' })
    }
}

module.exports = auth;