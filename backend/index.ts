import express from "express";
import cors from "cors";
import { connect } from "./src/config/Connect";
import { authRouter } from "./src/routes/userRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.all("/", (rq, rs) => rs.send("it works"));

app.use("/auth", authRouter);

app.listen(8080, async () => {
    await connect();
    console.log("works http://localhost:8080/");
})
