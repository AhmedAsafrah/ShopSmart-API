import { Product } from "../db/entites/Product.js";
import { Hotline } from "../db/entites/Hotline.js";
import { AppError } from "../errors/AppErrors.js";
import { Shop } from "../db/entites/Shop.js";
import { Response, Request } from "express";

const createShopController = async (payload: Shop, hotline_id: number) => {
    const shop = await Shop.findOne({ where: { shopName : payload.shopName } })

    if (shop) {
        throw new AppError("shop already exists", 409, true)
    }

    const hotline = await Hotline.findOne({ where: { id: hotline_id } })
    if (!hotline) {
        throw new AppError("hotline dose not exists", 404, true)
    }


    const newShop = await Shop.create({
        ...payload,
        hotline
    }).save()

    return newShop
}

const getAllShops = async ( req :Request ,res:Response) => {

    const shops = await Shop.find()

  
        res.status(200).json({
            message: "getting all shops successfully",
            status: true,
            shops: shops
        })

}

const getSingleShop = async (shopName:string) => {

    const shop = await Shop.findOne({where : {shopName : shopName}});

    if(!shop) { // will change when we use handlebars
        throw new AppError("Shop not found to get it 😢", 404, true);
    }
    return shop;
}

export { createShopController, getAllShops, getSingleShop }