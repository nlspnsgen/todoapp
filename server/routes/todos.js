const express = require("express");
const router = express.Router();
const {
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    addTodo,
    deleteAll
  } = require("../controllers/todoController");
  
  router
    .route("/")
    .get(getTodos)
    .post(addTodo)
  
  router
    .route("/:id")
    .get(getTodo)
    .delete(deleteTodo)
module.exports = router;