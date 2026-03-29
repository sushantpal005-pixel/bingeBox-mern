//step-1
//const express = require("express")
import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import cors from "cors"
import path from "path"

dotenv.config({
    path: "./.env"
})
databaseConnection()
const app = express()
const _dirname = path.resolve()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use(cors({ origin: 'https://bingebox-3auc.onrender.com', credentials: true }));

//api
app.use("/api/v1/user", userRoute)

app.use(express.static(path.join(_dirname, "/frontend/dist")))
// app.get('/*', (_, res)=>{
//     res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
// })
app.use((_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listen at port ${process.env.PORT} `)
})