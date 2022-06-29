
import { Item } from "./Item";

export class Menu{
    protected items: Item[] = [];

    addItem(...item:Item[]){
        this.items = this.items.concat(item);
    }

    getItemByCategory(){
        return this.items;
    }

    // debitQuantityItem(){
    //     // let orders = this.order.getCustomersOrder();
    //     for (let order of orders){
    //         let ordered = order.getOrderItem();
    //         for (let item of ordered.getOrderItem()){
    //             for (let stockItem of this.getItemByCategory()){
    //                 if (stockItem.isEqual(item)){
    //                     stockItem.debitQuantity(item.getQuantity());
    //                 }
    //             }
    //         }
    //     }
    //     return this.menu;
    // }
}