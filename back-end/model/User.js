const mongoose = require("mongoose")

const User = mongoose.model("User", {
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    user: String,
    senha: String
})

module.exports = User