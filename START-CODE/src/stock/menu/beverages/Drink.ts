import { Item, MenuCategory } from "../Item";


export class Drink extends Item{

    constructor (name:string, quantity:number,price:number, drink = MenuCategory.BEVERAGE){
        super(name,quantity,price,drink);
    }


}