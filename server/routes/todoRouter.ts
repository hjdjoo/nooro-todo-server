import { Router } from "express";

import todoController from "../controllers/todoController";

const todoRouter = Router();

todoRouter.get("/todo/all",
  todoController.getAllTodos
)

todoRouter.get("/todo/:id",
  todoController.getTodosById
)

todoRouter.post("/todo",
  todoController.addTodo
)

todoRouter.patch("/todo/",
  todoController.updateTodo
)

todoRouter.delete("/todo/:id",
  todoController.removeTodo
)

export default todoRouter