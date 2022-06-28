
import { Drink } from "./beverages/Drink";
import { Dessert } from "./dessert/Dessert";
import { Food } from "./foods/food";

export class Menu{
    public beverages: Drink[] = [];
    public food: Food[] = [];
    public dessert: Dessert[] = [];

    addDrinks(drink:Drink){
        if (this.beverages.length >= 1){
            for (let beverage of this.beverages){
                if (!beverage.isEqual(drink.getName())){
                    this.beverages.push(drink);
                }else {
                    beverage.getQuantity() += drink.getQuantity();
                }
            }
            this.beverages.push(drink);
        }
    }
}

function isEqual(arg0: string) {
    throw new Error("Function not implemented.");
}
