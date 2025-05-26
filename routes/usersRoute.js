const express = require("express");
const usersController = require("../controllers/usersController.js");

const usersRouter = express.Router();

// Rota que retorna todos os equipamentos
usersRouter.get("/", (req, res) => {
  usersController.getAllUsers(req, res);
});

// Rota que retorna um usuário específico pelo ID
usersRouter.get("/:id", (req, res) => {
  usersController.getUserById(req, res);
});

// Rota que cria um novo usuário
usersRouter.post("/", (req, res) => {
  usersController.createUser(req, res);
});

// Rota que atualiza um usuário específico pelo ID
usersRouter.put("/:id", (req, res) => {
  usersController.updateUser(req, res);
});

// Rota que deleta um usuário específico pelo ID
usersRouter.delete("/:id", (req, res) => {
  usersController.deleteUser(req, res);
});

module.exports = usersRouter;
