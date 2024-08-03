import { Router, Request, Response, NextFunction } from "express"
import { getAllProducts, createProduct, getSingleProduct } from "../controller/product.js";

import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";

const router = Router()


router.get("/", logRequestMiddleware, getAllProducts)

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body.name || !req.body.price || !req.body.shopId || !req.body.categories) {
            return res.status(400).json({
                message: "some fields are missing!!",
                success: false
            })
        }

        const product = await createProduct(req.body, req.body.shopId, req.body.categories)

        res.json({
            message: "Product created successfully",
            product: product
        })
    } catch (error) {
        console.log("error: " + error);
        next(error)
    }
})


router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productId = Number(req.params.id)
        const product = await getSingleProduct(productId)


        res.json({
            message: "product created successfully",
            product: product
        })
    } catch (error) {
        console.log("error: " + error);
        next(error)
    }
})


export default router;
