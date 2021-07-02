var express = require('express');
var router = express.Router();

const { findUsers, createUser } = require('../services/Clients.service')

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await findUsers()
    res.status(200).json({
      msg: "Lista de usuarios",
      body: users
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: "Internal server error",
    });
  }
})
  .post("/", async (req, res) => {
    try {
      let { body: user } = req
      const result = await createUser(user)
      res.status(200).json({
        msg: "Usuario creado",
        body: result.ops,
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({
        msg: "Internal server error",
      });
    }

  })

module.exports = router;
