const { default: mongoose } = require("mongoose")
const { env } = require("process")

const MongoConnect = ()=>{
    try {
        mongoose.connect(env.MONGO_DB_URI)
        console.log("connected to MongoDB")
    } catch (error) {
        console.error("An error occured connecting to MongoDB", error.message)
    }
}

module.exports = {MongoConnect}