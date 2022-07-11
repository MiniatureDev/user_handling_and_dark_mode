const { randomBytes, scryptSync, timingSafeEqual } = require("crypto")
const personModel = require("../models/person.model")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createPerson = async ctx => {
    try {
        // let data = ctx.request.body
        // let password = data.password
        // const salt = randomBytes(16).toString('hex')
        // password = scryptSync(password, salt, 64).toString('hex')
        // password = `${salt}:${password}`
        // data.password = password
        // const created = await personModel.create(data)
        // if(created) {
        //     ctx.request.status = 201
        //     ctx.response.body = created
        //     console.log(created.password.split(":"))

        // } else {
        //     throw new Error("Could not create person")
        // }


        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(ctx.request.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const created = await personModel.create( {
            id: ctx.request.body.id,
            userName: ctx.request.body.userName,
            email: ctx.request.body.email,
            password: hashedPassword
        } )

        if(created) {
            ctx.response.status = 201
            ctx.response.body = created
        } else {
            throw new Error("Could not create user")
        }
    } catch (error) {
        ctx.response.status = 400
        ctx.response.body = error
    }
}

const getUsers = async ctx => {
    try {
        const data = await personModel.find()
        if(data) {
            ctx.response.status = 200
            ctx.response.body = data
        } else {
            throw new Error("Could not find any users")
        }
    } catch (error) {
        ctx.response.status = 400
        ctx.response.body = error
    }
}

const updateUser = async ctx => {
    try {
        const id = ctx.request.params.id
        const data = ctx.request.body
        const updated = await personModel.updateOne({id: id}, data)
        if(updated) {
            ctx.response.status = 200
            ctx.response.body = updated
        }
    } catch (error) {
        ctx.response.status = 400
        ctx.response.body = error
    }
}

const deleteUser = async ctx => {
    try {
        const id = ctx.request.params.id
        const deleted = await personModel.deleteOne({id: id})
        if(deleted) {
            ctx.response.status = 200
            ctx.response.body = deleted
        } else {
            throw new Error("Could not find user")
        }
    } catch (error) {
        ctx.response.status = 204
        ctx.response.body = error
    }
}

const getSingleUser = async ctx => {
    try {
        const id = ctx.request.params.id
        const data = await personModel.findOne({id: id})
        if(data) {
            ctx.response.status = 200
            ctx.response.body = data
        } else {
            throw new Error("Could not find user")
        }
    } catch (error) {
        ctx.response.status = 400
    }
}

const login = async ctx => {
    try {
        // const { password } = await personModel.findOne({userName: ctx.request.body.userName})
        // const [salt, key] = password.split(":")
        // const hashedBuffer = scryptSync(password, salt, 64)
        // const keyBuffer = scryptSync(ctx.request.body.password, salt, 64)

        // // const keyBuffer = Buffer.from(key, 'hex')
        // console.log(hashedBuffer.toString('hex') + '\n\n\n' + keyBuffer.toString('hex'))
        // const match = timingSafeEqual(hashedBuffer, keyBuffer)

        // if (match) {
        //     ctx.response.body = 'Login success!'
        // } else {
        //     throw new Error('Login fail')
        // }

        const userName = ctx.request.body.userName
        const data = await personModel.findOne({userName: userName})
        const verified = await bcrypt.compare(ctx.request.body.password, data.password)

        
        if(verified) {
            ctx.response.status = 200
            const token = generateToken(data.id, data.userName, data.email)
            const signedData = jwt.verify(token, "jwt123")
            ctx.response.body = signedData
        } else {
            ctx.response.body = "Login fail"
            ctx.response.status = 400
        }
        
    } catch (error) {
        ctx.response.status = 400
        ctx.response.body = error
    }
}

const logout = async ctx => {
    try {
        ctx.response.status = 200
        const token = generateToken()
        const signedData = jwt.verify(token, "jwt123", {maxAge: 1})
        ctx.response.body = signedData
    } catch (error) {
        ctx.response.status = 400
        ctx.response.body = error
    }
}

function generateToken(id, userName, email) {
    return jwt.sign({
        id,
        userName,
        email,
    }, "jwt123", {
        expiresIn: "1h"
    })
}

module.exports = { createPerson, getUsers, updateUser, deleteUser, getSingleUser, login, logout }
