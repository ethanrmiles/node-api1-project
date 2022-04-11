const express = require('express')
const Users = require('./users/model')

const server = express()

server.use(express.json())

// console.log(Users) vvvv
// {
//     find: [Function: find],
//     findById: [Function: findById],
//     insert: [Function: insert],
//     update: [Function: update],
//     remove: [Function: remove],
//     resetDB: [Function: resetDB]
//   }

server.get('/users', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
})




module.exports = server; // EXPORT YOUR SERVER instead of {}
