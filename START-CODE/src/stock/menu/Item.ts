import { MenuCategory } from "./Menu";

export class Item {
    constructor (protected name: string, protected quantity: number, protected price:number){}
    getName(){
        return this.name;
    }
    getQuantity(){
        return this.quantity;
    }

    getPrice(){
        return this.price;
    }

}