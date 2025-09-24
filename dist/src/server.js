import express from "express";
import bodyParser from 'body-parser';
import router from "./routes/router.js";
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
const PORT = parseInt(process.env.PORT || "8000", 10);
app.use("/api", router);
// Simple health check
app.get("/", (req, res) => {
    res.send("Server is running!");
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
//# sourceMappingURL=server.js.map