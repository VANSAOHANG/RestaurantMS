import { Item, MenuCategory } from "../Item";

export class Dessert extends Item{
    constructor (name:string, quantity:number,price:number, dessert = MenuCategory.DESSERT){
        super(name,quantity,price,dessert);
    }

}