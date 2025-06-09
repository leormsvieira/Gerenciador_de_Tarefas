require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./src/config/database");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));

db.authenticate()
  .then(() => {
    console.log("Conectado ao banco de dados PostgreSQL");

    app.use(express.json());

    const usersRoute = require("./src/routes/usersRoute");
    app.use("/api/users", usersRoute);

    const tasksRoute = require("./src/routes/tasksRoute");
    app.use("/api/tasks", tasksRoute);

    const categoriesRoute = require("./src/routes/categoriesRoute");
    app.use("/api/categories", categoriesRoute);

    const taskCategoriesRoute = require("./src/routes/taskCategoriesRoute");
    app.use("/api/task-categories", taskCategoriesRoute);

    const frontendRoutes = require("./src/routes/frontendRoutes");
    app.use("/", frontendRoutes);

    // Middleware para lidar com erros de rota não encontrada
    app.use((req, res, next) => {
      res.status(404).send("Página não encontrada");
    });

    // Middleware para lidar com erros internos do servidor
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Erro no servidor");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
