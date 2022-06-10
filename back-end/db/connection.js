const mongoose = require("mongoose")

//mongodb+srv://admin:admin@cluster0.qufau.mongodb.net/test

mongoose.connect("mongodb+srv://admin:admin@cluster0.qufau.mongodb.net/test")
.then(() => {
    console.log("Mongo connected")
})
.catch(e => console.log(e))
