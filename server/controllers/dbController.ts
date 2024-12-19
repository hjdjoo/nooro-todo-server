import { Request, Response, NextFunction } from "express";

import createPrisma from "../../utils/createPrisma";

interface dbController {
  [middleware: string]:
  (req: Request, res: Response, next: NextFunction) => void
}

const dbController: dbController = {};

const prisma = createPrisma();

dbController.getAllTodos =
  async (req: Request, res: Response, next: NextFunction) => {




  }

dbController.getTodosById =
  async (req: Request, res: Response, next: NextFunction) => {



  }

dbController.addTodo =
  async (req: Request, res: Response, next: NextFunction) => {



  }

dbController.updateTodo =
  async (req: Request, res: Response, next: NextFunction) => {



  }

dbController.removeTodo =
  async (req: Request, res: Response, next: NextFunction) => {



  }


export default dbController;