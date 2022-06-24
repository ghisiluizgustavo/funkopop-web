const express = require('express')
const router = express.Router()
const User = require('../model/User')
const mongoose = require('mongoose')

router.get("/", async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

router.get("/:id", async (req, res) => {
  const id = req.params.id
  const user = await User.findOne({ id: id })
  res.status(200).json(user)
})

router.post("/login", async (req, res) => {
  const user = req.body.user
  const senha = req.body.senha
  const userDb = await User.findOne({ user: user })
  if (!userDb){
    res.status(404).json({ message: "Usuario nao encontrado "})
  }
  if (userDb.senha != senha){
    res.status(400).json({ message: "Senha incorreta" })  
  }
  res.status(200).send()
})

router.post("/register", async (req, res) => {
  let _id = new mongoose.Types.ObjectId()
  const { nome, user, senha } = req.body
  const userToCreate = { _id, nome, user, senha }

  try {
      await User.create(userToCreate)
      res.status(201).json({ message: "Usuario criado" })
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