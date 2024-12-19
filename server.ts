import express, { Response, Request, NextFunction } from "express";

import dbRouter from "./server/routes/dbRouter";

import { defaultError } from "./_const/defaultError";

const app = express();

const PORT = process.env.PORT

// parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json("success!")
})

// routers
app.use("/api", dbRouter)

// unknown route handler
app.use("/*", (_req: Request, res: Response) => {
  res.status(404).json("Unknown Route")
});

// global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {

  console.error("Global error handler/error stack: ", err.stack);

  const error = Object.assign({}, defaultError, err);

  res.status(error.status).json(error.message);

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})