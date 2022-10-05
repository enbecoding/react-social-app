//Brings info from .env file
require('dotenv').config()
//creating a variable for JSON Web Token that creates a string of data that represents something else
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
    //Function that checks if the user has a token or not
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get('Authorization')
      
        if (!headerToken) {
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }

        let token

        try {
            //encodes the token into a string of three parts
            token = jwt.verify(headerToken, SECRET)
        } catch (err) {
            err.statusCode = 500
            throw err
        }
        //error conditional if token is not present  
        if (!token) {
            const error = new Error('Not authenticated.')
            error.statusCode = 401
            throw error
        }

        next()
    }
}