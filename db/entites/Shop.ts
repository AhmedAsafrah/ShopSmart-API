import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import * as bcrypt from 'bcrypt';

import { Hotline } from "./Hotline.js";
import { Product } from "./Product.js";

@Entity("shop")
export class Shop extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255, nullable: false })
    shopName: string;

    @Column({ length: 255, nullable: false })
    email: string

    @Column({ length: 255, nullable: false })
    password: string

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }

    @OneToMany(()=>Product, product => product.shop)
    products: Partial<Product>[];

    @OneToOne(() => Hotline, hotline => hotline.id)
    @JoinColumn(
        {
            name: "hiotline_id",
            referencedColumnName: "id"
        }
    )
    hotline : Hotline;

}