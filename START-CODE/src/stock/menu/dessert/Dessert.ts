import { Item } from "../Item";
import { MenuCategory } from "../Menu";

export class Dessert extends Item{
    // public dessert: MenuCategory = MenuCategory.DESSERT;
    constructor (name:string, quantity:number,price:number){
        super(name,quantity,price);
    }

}