import { DataSource } from "typeorm";

import { Shop } from "./entites/Shop.js";
import { Category } from "./entites/Category.js";
import { Product } from "./entites/Product.js";
import { Hotline } from "./entites/Hotline.js";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "exam-db",
    synchronize: true,
    logging: false,
    entities: [Shop, Category, Product, Hotline]
})

export default dataSource;