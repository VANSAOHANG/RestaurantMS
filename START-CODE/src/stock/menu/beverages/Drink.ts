import { Item } from "../Item";


export enum DrinksCategory{
    COCA_COLA,
    PEPSI,
    BACCHUS,
    OISHI,
    STING,
    COFFEE,
}
export class Drink extends Item{

    constructor (name:string, quantity:number){
        super(name,quantity);
    }

    getName(){
        return this.name;
    }
    getQuantity(){
        return this.quantity;
    }

    isEqual(other:string):boolean{
        if (this.name === this.getName()){
            return true;
        }
        return false;
    }
}