import { Request, Response, NextFunction } from "express";

import { Prisma } from "@prisma/client";
import createPrisma from "../../utils/createPrisma";

import { ServerError } from "../../_types/server-types";
import { defaultError } from "../../_const/defaultError";


interface dbController {
  [middleware: string]:
  (req: Request, res: Response, next: NextFunction) => void
}

const dbController: dbController = {};

const prisma = createPrisma();

dbController.getAllTodos =
  async (_req: Request, res: Response, next: NextFunction) => {

    try {

      const todos = await prisma
        .toDo
        .findMany();

      res.status(200).json(todos);

    } catch (e) {
      console.error("getAllTodos/e: ", e);

      const error = defaultError;
      error.log = "Something went wrong while getting all todos";
      error.status = 500;
      error.message = {
        error: `${e}`
      }

      return next(error);

    }

  }

dbController.getTodosById =
  async (req: Request, res: Response, next: NextFunction) => {
    try {

      const { id } = req.params;

      if (!id) {
        throw new Error("No Id found - no query initiated");
      }
      if (!Number(id)) {
        throw new Error("Couldn't parse ID from params");
      }

      const todo = await prisma
        .toDo
        .findUnique({
          where: {
            id: Number(id)
          }
        })

      if (!todo) {
        throw new Error("No todo item found with that ID.");
      }

      return res.status(200).json(todo);


    } catch (e) {
      console.error("getTodosById/e: ", e);

      const error = defaultError;
      error.log = "Something went wrong while getting todo item by ID";
      error.status = 500;
      error.message = {
        error: `${e}`
      }

      return next(error);

    }

  }

dbController.addTodo =
  async (req: Request, res: Response, next: NextFunction) => {

    try {

      type AddTodoReq = {
        title: string,
        color: string,
      }

      const todoRequest: AddTodoReq = req.body;

      const newTodo = await prisma
        .toDo
        .create({
          data: {
            title: todoRequest.title,
            color: todoRequest.color
          }
        })


      return res.status(201).json(newTodo);


    } catch (e) {
      console.error("addTodo/e: ", e);

      const error = defaultError;
      error.log = "Something went wrong while adding todo item";
      error.status = 500;
      error.message = {
        error: `${e}`
      }

      return next(error);

    }


  }

dbController.updateTodo =
  async (req: Request, res: Response, next: NextFunction) => {

    try {

      type updateTodoReq = {
        id: number
        complete: boolean
      }

      const updatedTodoReq: updateTodoReq = req.body

      console.log("updateTodo/updatedTodoReq: ", updatedTodoReq);

      const updatedTodo = await prisma
        .toDo
        .update({
          data: {
            complete: updatedTodoReq.complete
          },
          where: {
            id: updatedTodoReq.id
          }
        })

      return res.status(200).json(updatedTodo);

    } catch (e) {
      console.error("updateTodo/e: ", e);

      const error = defaultError;
      error.log = "Something went wrong while updating todo";
      error.status = 500;
      error.message = {
        error: `${e}`
      }

      return next(error);

    }


  }

dbController.removeTodo =
  async (req: Request, res: Response, next: NextFunction) => {

    try {

      const { id } = req.params;

      if (!id) {
        throw new Error("No ID detected in params")
      }
      if (!Number(id)) {
        throw new Error("Couldn't parse ID from params")
      }

      const removedTodo = await prisma
        .toDo
        .delete({
          where: {
            id: Number(id)
          }
        })

      return res.status(200).json(removedTodo)

    } catch (e) {
      console.error("removeTodo/e: ", e);

      const error = defaultError;
      error.log = "Something went wrong while removing Todo";
      error.status = 500;
      error.message = {
        error: `${e}`
      }

      return next(error);

    }


  }


export default dbController;