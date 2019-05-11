const routes = require('express').Router()
const { User } = require('./app/models')

User.create({ name: 'Yago', email: 'teste@gmail.com', password_hash: '123123123123123' })

module.exports = routes