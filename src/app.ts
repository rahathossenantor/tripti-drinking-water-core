import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import cookieParser from "cookie-parser";

const app: Application = express();

// parsers (middlewares)
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:3000", "https://tripti-drinking-water-core-view.netlify.app"], credentials: true }));

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tripti Drinking Water!",
  });
});

// global error handler
app.use(globalErrorHandler);
// not found route
app.use(notFound);

export default app;

/*

*/
