const koa = require("koa")
const bodyParser = require("koa-bodyparser")
const cors = require("@koa/cors")
const mongoose = require("mongoose")
const personRouter = require("./routers/person.router")

const app = new koa()
app.use(bodyParser()).use(cors())

app.use(personRouter.routes()).use(personRouter.allowedMethods())

const PORT = 3000
const MONGODB_URI = "mongodb://localhost:27017/my_graphql_project"

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})

app.use(ctx => {
    ctx.set({"Content-Type":"text/html"})
    ctx.response.body = "<h1> Page Not Found </h1>"
    ctx.response.status = 404
})

mongoose.connect(MONGODB_URI, ()=>{
    console.log(`Mongo server connection initialized at ${MONGODB_URI}`)
})