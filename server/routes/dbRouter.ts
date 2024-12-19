import { Router, Request, Response, NextFunction } from "express";

const dbRouter = Router();

dbRouter.get("/todo/all",
  (req: Request, res: Response, next: NextFunction) => {

  })

dbRouter.get("todo/:id",
  (req: Request, res: Response, next: NextFunction) => {

  })

dbRouter.post("/todo",
  (req: Request, res: Response, next: NextFunction) => {

  })

dbRouter.patch("/todo",
  (req: Request, res: Response, next: NextFunction) => {

  })

dbRouter.delete("/todo/:id",
  (req: Request, res: Response, next: NextFunction) => {

  })

export default dbRouter