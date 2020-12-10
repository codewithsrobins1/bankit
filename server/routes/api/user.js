const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

//Register New User - POST REQUEST
router.post('/', (req, res) => {
    const { full_name, email, password} = req.body;

    //Validation
    if(!full_name || !email || !password){
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

// @route   POST api/users
// @desc    Register new user
// @access  Public
    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists' })

            const newUser = new User({
               full_name,
               email,
               password 
            })

            //Generate SALT to Hash Password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;

                    newUser.password = hash
                    newUser.save()
                        .then(user => {

                            //Know which user is sending the token
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;

                                    //Send a Token along with User
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            full_name: user.full_name,
                                            email: user.email
                                        }
                                    });
                                }
                            )                         
                        })
                })
            })
        })
})

module.exports = router;
