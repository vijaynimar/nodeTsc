import express from "express"
import bodyParser from 'body-parser';
import cors from "cors"
import router from "./routes/router.js"

const app=express()
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));

const PORT = parseInt(process.env.PORT || "8000")

app.use("/api",router)

// Simple health check
app.get("/", (req, res) => {
    res.send("Server is running!");
});
 
app.listen(PORT, "0.0.0.0",()=>{
    console.log(`Server started on port ${PORT}`);
})