import { Hotline } from "../db/entites/Hotline.js";
import { AppError } from "../errors/AppErrors.js";
import { Request, Response } from "express";

const createHotlineController = async (hotline: Hotline) => {
    const hotlineExists = await Hotline.findOne({ where: { hotlineNumber : hotline.hotlineNumber } })

    if (hotlineExists) {
        throw new AppError("Hotline already exists", 409, true)
    }
    
    const newHotline = await Hotline.create(hotline).save()

    return newHotline
}

const getAllHotlines = async ( req :Request ,res:Response) => {

    const hotlines = await Hotline.find()

  
        res.status(200).json({
            message: "getting all shops successfully",
            status: true,
            hotlines: hotlines
        })

}
const getSingleHotline = async (id:number) => {

    const hotline = await Hotline.findOne({where : {id : id}});

    if(!hotline) { // will change when we use handlebars
        throw new AppError("hotline not found to get it 😢", 404, true);
    }
    return hotline;
}

export { createHotlineController, getAllHotlines, getSingleHotline }