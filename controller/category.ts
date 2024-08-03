import { Category } from "../db/entites/Category.js"
import { Request, Response } from "express"
const createCategoryController = async (category: Category) => {
    const categoryExists = await Category.findOne({ where: { name: category.name } })

    if (categoryExists) {
        throw new Error("Category already exists")
    }

    const newCategory = await Category.create(category).save()

    return newCategory
}

const getAllCategories = async ( req :Request ,res:Response) => {

    const cate = await Category.find()

  
        res.status(200).json({
            message: "getting all shops successfully",
            status: true,
            cate: cate
        })

}

export { createCategoryController, getAllCategories }