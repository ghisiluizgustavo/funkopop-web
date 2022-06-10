const express = require('express')
const router = express.Router()
const User = require('../model/User')

router.get("/", async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

router.get("/:id", async (req, res) => {
  const id = req.params.id
  const user = await User.findOne({ id: id })
  res.status(200).json(user)
})

router.post("/", async (req, res) => {
  const { nome, user, senha, funkos: [{ id, descricao, valor, url, sale }] } = req.body
  const userToCreate = { nome, user, senha, funkos: [{ id, descricao, valor, url, sale }] }

  try {
      await User.create(userToCreate)
      res.status(201).json({ message: "Usuario criado" })
  } catch(e){
      res.send(e)
  }
})

module.exports = router;