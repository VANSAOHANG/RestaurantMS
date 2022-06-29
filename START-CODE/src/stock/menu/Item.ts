
export enum MenuCategory {
    FOOD = 'Food', 
    DESSERT = "Dessert", 
    BEVERAGE = 'Beverage'
}
export class Item {
    constructor (
        protected name: string, 
        protected quantity: number, 
        protected price:number,
        protected itemCategory:MenuCategory
        ){}
    getName(){
        return this.name;
    }
    getQuantity(){
        return this.quantity;
    }

    getPrice(){
        return this.price;
    }

    debitQuantity(quantity:number){
        this.quantity = this.quantity - quantity;
    }

    isEqual(other:Item):boolean{
        if (this.getName() === other.getName()){
            return true;
        }
        return false;
    }

}