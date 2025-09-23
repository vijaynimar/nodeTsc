import express from "express"
import bodyParser from 'body-parser';
import router from "./routes/router.js"
const app=express()
// app.use(express.json())
app.use(bodyParser.json({ limit: '50mb' }));

const PORT=8000
const HOST=String(process.env.HOST)||"localhost"
app.use("/api",router)
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})