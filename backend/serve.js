const express = require('express')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth.routes')
const { env } = require('process')
const { MongoConnect } = require('./db/MongoDB')

const app = express()

dotenv.config()

const port = env.PORT || 5000
const hostname = env.HOSTNAME
const protocol = env.PROTOCOL

MongoConnect()

app.use(express.json())

app.use('/auth', authRoute)

app.listen(port, hostname, ()=>console.log(`${protocol}${hostname}:${port}`))