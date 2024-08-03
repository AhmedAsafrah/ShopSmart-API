import { Request, Response } from "express";

import { Product } from "../db/entites/Product.js";
import { AppError } from "../errors/AppErrors.js";
import { Shop } from "../db/entites/Shop.js";
import { Category } from "../db/entites/Category.js";
import { In } from "typeorm";

const createProduct = async (payload:Product, shopId : string, categoriesIds : number[]) => {

    const shop = await Shop.findOne({where: {id: shopId}})
    if(!shop){
        throw new AppError("Shop not found", 404, true)
    }

    const categories = await Category.find({ where: { id: In(categoriesIds) } })
    if (categories.length !== categoriesIds.length) {
        throw new AppError("some categories are not exists", 404, true)
    }

    const product = await Product.findOne({
        where: {
            name: payload.name,
            price: payload.price,
            shop : shop
        }

    });

    if (product) {
        throw new AppError("product already exists", 409, true)
    }

    const newProduct = Product.create({
        ...payload,
        shop: shop, // this is how we associate,
        categories: categories // this is how we associate,
        //
    })

    return newProduct.save()
}

const getAllProducts = async (req: Request, res: Response) => {
    const products = await Product.find()

    res.json({
        message: "getting all Products successfully",
        status: true,
        products: products
    })
}

const getSingleProduct = async (productId: any) => {
    const product = await Product.findOne({ where: { id: productId } })

    if (!product) {
        throw new AppError("product not found", 404, true)
    }

    return product
}

export { createProduct, getAllProducts, getSingleProduct }