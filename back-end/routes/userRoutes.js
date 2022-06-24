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

router.post("/", async (req, res) => {
  let _id = new mongoose.Types.ObjectId()
  const { nome, user, senha, funkos } = req.body
  const userToCreate = { _id, nome, user, senha, funkos }

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