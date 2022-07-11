const Router = require("koa-router")
const { createPerson, getUsers, updateUser, deleteUser, getSingleUser, login, logout } = require("../apis/person.api")
const personRouter = new Router({
    prefix: '/users'
})

personRouter.post('/newUser', createPerson)
personRouter.get('/', getUsers)
personRouter.put('/updateUser/:id', updateUser)
personRouter.delete('/deleteUser/:id', deleteUser)
personRouter.get('/getSingleUser/:id', getSingleUser)
personRouter.post('/login', login)
personRouter.get('/logout', logout)

module.exports = personRouter
