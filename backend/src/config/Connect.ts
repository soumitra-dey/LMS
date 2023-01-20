import mongoose from "mongoose";
import "dotenv/config";
export const connect = () => mongoose.connect(process.env.DBURL || "");