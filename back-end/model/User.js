const mongoose = require("mongoose")

const User = mongoose.model("User", {
    _id: Object,
    nome: String,
    user: String,
    senha: String,
    funkos: [{
      id: Number,
      descricao: String,
      valor: Number,
      url: String,
      sale: Boolean
    }]
})

module.exports = User