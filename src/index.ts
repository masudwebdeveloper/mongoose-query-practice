import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
const app: Application = express();
const port = process.env.PORT || 5000;
//using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { URI } = process.env;

const dbconnect = async (): Promise<void> => {
  if (!URI) {
    throw new Error("URI is not defined");
  }
  await mongoose.connect(URI).then(() => console.log("Database connected"));
};

dbconnect().catch(console.dir);

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running 🔥"});
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

console.log(URI);
