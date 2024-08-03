import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"

import { Shop } from "./Shop.js";

@Entity("hotline")
export class Hotline extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    // @Column({ length: 255, nullable: false })
    // shopId: string;

    @Column({nullable: false })
    hotlineNumber : number

    @OneToOne(()=>Shop, shop => shop.id)
    shop: Partial<Shop>

}