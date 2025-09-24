import express from "express"
import bodyParser from 'body-parser';
import router from "./routes/router.js"
const app=express()
// app.use(express.json())
app.use(bodyParser.json({ limit: '50mb' }));

const PORT=parseInt(process.env.PORT ?? "8000", 10)
app.use("/api",router)
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server started at port ${PORT}`);
})