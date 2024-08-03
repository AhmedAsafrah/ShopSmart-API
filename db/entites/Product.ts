import { BaseEntity,  Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Shop } from "./Shop.js";
import { Category } from "./Category.js";

@Entity("product")
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 255, nullable: false })
    name: string;

    @Column({ nullable: false })
    price : number

    @ManyToOne(()=>Shop, shop => shop.products)
    shop : Partial<Shop>

    @ManyToMany(()=>Category, category => category.id)
    @JoinTable({
        name: "product_category"
    })
    categories: Category[];

}