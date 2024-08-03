import { NextFunction, Router } from "express";
import { createHotlineController, getAllHotlines, getSingleHotline } from "../controller/hotline.js";
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";
import { Response , Request } from "express";

const router = Router()

router.post("/", async (req, res, next) => {
    try {
        const hotline = req.body
        if (!hotline.hotlineNumber) {
            return res.status(400).json({
                message: "some fields are missing",
                success: false,
            })
        }

        const newHotline = await createHotlineController(hotline)

        res.status(201).json({
            message: "Hotline created successfully",
            success: true,
            data: newHotline
        })

    } catch (error) {
        next(error)
    }
})

router.get("/", logRequestMiddleware ,getAllHotlines)

router.get("/:id", async(req: Request, res: Response, next: NextFunction) => {

    try {
        const id = Number(req.params.id);
        const hotline = await getSingleHotline(id);
        res.json({
            msg : "Customer fetched successfully 😀",
            success : true,
            data : hotline
        })

    } catch (error) {
        console.log("Error while fetching customer" + error);
        next(error);
    }
 
})

export default router