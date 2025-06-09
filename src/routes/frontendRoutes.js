const express = require("express");
const frontendRouter = express.Router();

// Rota para a página inicial - Dashboard de Tarefas
frontendRouter.get("/", (req, res) => {
  res.render("pages/dashboard", { title: "Dashboard" });
});

// Rota para a página de tarefas
frontendRouter.get("/tasks", (req, res) => {
  res.render("pages/tasks", { title: "Minhas Tarefas" });
});

// Rota para a página de categorias
frontendRouter.get("/categories", (req, res) => {
  res.render("pages/categories", { title: "Categorias" });
});

// Rota para a página de usuários
frontendRouter.get("/users", (req, res) => {
  res.render("pages/users", { title: "Usuários" });
});

module.exports = frontendRouter;
