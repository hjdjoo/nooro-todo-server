import express, { Response, Request, NextFunction } from "express";

const app = express();

const PORT = process.env.PORT

app.use("/", (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json("success!")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

