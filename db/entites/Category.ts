import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "./Product.js";

@Entity("category")
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 255, nullable: false })
    name: string;

    @ManyToMany(()=>Product, (product) => product.id)
    products: Product[];

}