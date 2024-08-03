import { Router } from "express";

import { createCategoryController, getAllCategories } from "../controller/category.js";
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";

const router = Router()

router.get("/", logRequestMiddleware ,getAllCategories)


router.post("/", async (req, res, next) => {
    try {
        const category = req.body
        if (!category.name) {
            return res.status(400).json({
                message: "category name is missing",
                success: false,
            })
        }

        const newCategory = await createCategoryController(category)

        res.status(201).json({
            message: "category created successfully",
            success: true,
            data: newCategory
        })

    } catch (error) {
        next(error)
    }
})

export default router