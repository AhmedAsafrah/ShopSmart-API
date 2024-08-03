import { Request, Response } from "express";
import express from 'express'
import env from "dotenv";
import dataSource from "./db/dbConfig.js";
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandler.js";
import categoryRouter from "./routes/category.js";
import productRouter from "./routes/product.js";
import shopRouter from "./routes/shop.js";
import hotlineRouter from "./routes/hotline.js";

const app = express();
env.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use("/category" , categoryRouter)
app.use("/product" , productRouter)
app.use("/shop" , shopRouter)
app.use("/hotline" , hotlineRouter)


app.use(customErrorHandler)
app.use(DefaultErrorHandler)

dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;

