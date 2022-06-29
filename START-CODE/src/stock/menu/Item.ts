export abstract class Item {
    constructor (protected name: string, protected quantity: number, protected price:number){}

    abstract  getName():string;
    abstract getQuantity():number;
    abstract getPrice():number;

}