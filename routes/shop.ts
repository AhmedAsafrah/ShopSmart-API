import { Router, Request, Response, NextFunction } from "express";
import { createShopController, getAllShops, getSingleShop } from "../controller/shop.js";

import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";

const router = Router()

router.get("/", logRequestMiddleware ,getAllShops)


router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body.shopName || !req.body.email || !req.body.password || !req.body.hiotline_id) {
            res.status(400).json({
                message: "some fields are missing",
                success: false
            })
        }

        const shop = await createShopController(req.body, req.body.hiotline_id)

        res.status(201).json({
            message: "Shop created successfully",
            shop: shop
        })

    } catch (error) {
        next(error)
    }
})

router.get("/:name", async(req: Request, res: Response, next: NextFunction) => {

    try {
        const name = String(req.params.name);
        const shop = await getSingleShop(name);
        res.json({
            msg : "Customer fetched successfully 😀",
            success : true,
            data : shop
        })

    } catch (error) {
        console.log("Error while fetching customer" + error);
        next(error);
    }
 
})

export default router