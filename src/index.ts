import { AppDataSource } from "./data-source";
import { Request, Response } from "express";

const express = require("express");
require("dotenv").config();
const PORT = process.env["PORT"] || 5000;
const app = express();

const initializeDatasource = async () => {
  try {
    await AppDataSource.initialize();
    console.log(`Datasource initialized successfully!`);
  } catch (error: any) {
    console.log(error.message);
  }
};
app.get("/heath", (req: Request, res: Response) => {
  res.json({ appHealth: "Okay" });
});

app.listen(PORT, () => {
  console.log(
    JSON.stringify({
      username: process.env["DATABASE_USERNAME"],
      password: process.env["DATABASE_PASSWORD"],
      database: process.env["DATABASE"],
    })
  );

  initializeDatasource().then();
  console.log(`App listening on port: ${PORT}`);
});
