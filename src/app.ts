import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnect } from "./app/utils/dbConnect";
const app: Application = express();
//using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// dbConnect
dbConnect();

// we will import routers
import productRouter from "./app/modules/product/product.router";

// here will be default routers
app.use("/api/v1/products", productRouter);

// custom route path

export {app};