import { Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

const globalErrorHandler = (err: HttpError, req: Request, res: Response) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message || "Something went wrong",
    errorStack: config.env === "DEVELOPMENT" ? err.stack : undefined,
  });
};

export default globalErrorHandler;
