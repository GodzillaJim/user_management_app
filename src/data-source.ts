import "reflect-metadata"

import { DataSource } from "typeorm"
require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env["host"],
    port: 3306,
    username: process.env["DATABASE_USERNAME"],
    password: process.env["DATABASE_PASSWORD"],
    database: process.env["DATABASE"],
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
