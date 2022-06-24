const express = require('express')
const router = express.Router()
const Funko = require('../model/Funko')
const mongoose = require('mongoose')

router.get("/", async (req, res) => {
    const funkos = await Funko.find().where('sale').equals('true')
    res.status(200).json(funkos)
  })
  
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({ id: id })
    res.status(200).json(user)
})

router.post("/register", async (req, res) => {
    let _id = new mongoose.Types.ObjectId()
    const { descricao, valor, url, sale } = req.body
    const funkoCreate = { _id, descricao, valor, url, sale }

    try {
        await Funko.create(funkoCreate)
        res.status(201).json({ message: "Funko criado" })
    } catch(e){
        res.status(500).send(e)
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    await User.deleteOne({ id: id})
    res.status(200).json({ message: "Usuario deletado" })
})

module.exports = router;