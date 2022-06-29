import { Drink } from "../stock/menu/beverages/Drink";
import { Dessert } from "../stock/menu/dessert/Dessert";
import { Food } from "../stock/menu/foods/food";
import { Item } from "../stock/menu/Item";

export class OrderItem {
    private orderItem: (Food|Dessert|Drink)[]=[];
    addItem(...item:Item[]){
        this.orderItem = this.orderItem.concat(item);
    }

    getOrderItem(){ return this.orderItem; };
}