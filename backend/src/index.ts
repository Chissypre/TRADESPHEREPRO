import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import path from "path";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((cors()))

app.get("/api/test", (req: Request, res: Response) => {
    res.json({ message: "hello from express endpoint" })
})

app.use(express.static(path.join(__dirname, "../../frontend/dist")))

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

app.listen(7000, () => {
    console.log("server started on localhost:7000");
})