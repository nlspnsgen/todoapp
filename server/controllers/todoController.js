const Todo = require("../models/todo");
const createError = require("http-errors");

exports.getTodos = async (req, res, next) => {
    try {
      const todo = await Todo.find();
      if (!todo) throw new createError.NotFound();
      res.status(200).send(todo);
    } catch (e) {
      next(e);
    }
  };
  exports.getTodo = async (req, res, next) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) throw new createError.NotFound();
      res.status(200).send(todo);
    } catch (e) {
      next(e);
    }
  };
  exports.addTodo = async (req, res) => {
    const todo = new Todo(req.body);
    try {
      await todo.save();
      res.send(todo);

    } catch (err) {
      res.status(500).send(err);
    }
};
exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) throw new createError.NotFound();
        res.status(200).send(todo);
      } catch (e) {
        next(e);
      }
    };
