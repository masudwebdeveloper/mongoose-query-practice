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

//ejs file set
app.set('view engine', "ejs")

// here will be default routers
app.get("/", (req, res) => {
    res.render("index");
})

// custom route path
app.use("/api/v1/products", productRouter);
export {app};