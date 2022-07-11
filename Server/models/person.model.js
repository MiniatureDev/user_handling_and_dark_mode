const mongoose = require("mongoose")
const personSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const personModel = mongoose.model("users", personSchema)
module.exports = personModel