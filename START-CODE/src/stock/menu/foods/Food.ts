import { Item, MenuCategory } from "../Item";

export class Food extends Item{
    constructor (name:string, quantity:number,price:number, food = MenuCategory.FOOD){
        super(name,quantity,price,food);
    }

}