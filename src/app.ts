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

// here will be default routers

// custom route path

export {app};