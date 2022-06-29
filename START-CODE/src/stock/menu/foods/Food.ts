import { Item } from "../Item";
import { MenuCategory } from "../Menu";

export class Food extends Item{
    // public food: MenuCategory = MenuCategory.FOOD;
    constructor (name:string, quantity:number,price:number){
        super(name,quantity,price);
    }

}