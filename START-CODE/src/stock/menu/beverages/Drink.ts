import { Item } from "../Item";
import { MenuCategory } from "../Menu";

export class Drink extends Item{
    // public drink :MenuCategory = MenuCategory.FOOD;
   constructor (name:string, quantity:number,price:number){
        super(name,quantity,price);
    }

}