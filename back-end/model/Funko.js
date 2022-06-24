const mongoose = require("mongoose")

const Funko = mongoose.model("Funko", {
    _id: mongoose.Schema.Types.ObjectId,
    descricao: String,
    valor: Number,
    url: String,
    sale: Boolean
})

module.exports = Funko