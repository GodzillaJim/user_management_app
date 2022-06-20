import express, { Express } from "express";

import cors from "cors";
import { urlencoded } from "body-parser";

const startApplication = () => {
  const app: Express = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("../public"));

  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
};

startApplication();
