// internal dependencies
import { connectMongo } from "./config.js";

/**
 * Method to establish mongodb connection
 */
export async function connect() {
  await connectMongo();
}
