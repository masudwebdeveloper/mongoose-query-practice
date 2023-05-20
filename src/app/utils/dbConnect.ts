import mongoose from "mongoose";
import { log } from "./logger";
const { URI } = process.env;

async function dbConnect(): Promise<void> {
  try {
    if (!URI) {
      log.error("no get any uri defined");
      process.exit(1);
    }
    await mongoose.connect(URI).then(() => log.info("database connected"));
  } catch (error: any) {
    log.error(error.message);
  }
}
export { dbConnect };
