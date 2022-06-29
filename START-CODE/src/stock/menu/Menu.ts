
import { Drink } from "./beverages/Drink";
import { Dessert } from "./dessert/Dessert";
import { Food } from "./foods/food";
export enum MenuCategory {
    FOOD, DESSERT, BEVERAGE
}
export class Menu{
    public beverages: Drink[] = []
    public food: Food[] = [];
    public dessert: Dessert[] = [];

    addDrinks(...drink:Drink[]){
        for (let dr of this.beverages){
        }
        this.beverages = this.beverages.concat(drink);
    }
    addFood(...food:Food[]){
        this.food = this.food.concat(food);
    }

    addDessert(...dessert:Dessert[]){
        this.dessert = this.dessert.concat(dessert);
    }
    getBeverages(){
        return this.beverages;
    }
}