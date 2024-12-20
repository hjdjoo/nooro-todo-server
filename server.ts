import express, { Response, Request, NextFunction } from "express";
import cors from "cors";

import todoRouter from "./server/routes/todoRouter";

import { defaultError } from "./_const/defaultError";

import { ServerError } from "./_types/server-types";

const app = express();

const PORT = process.env.PORT

// parse incoming requests
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routers
app.use("/api", todoRouter)

// unknown route handler
app.use("/*", (_req: Request, res: Response) => {

  res.status(404).json("Unknown Route")

});

// global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {

  console.error("Global error handler/err: ", err)

  const error: ServerError = Object.assign({}, defaultError, err);

  res.status(error.status).json(error.message);

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})