import { Item } from "../stock/menu/Item";
import { Order } from "./Order";

export class OrderManagement {
    private orders: Order[] = [];

    makeOrder(order: Order){
        if(order.isHasCustomer()){
            this.orders.push(order);
        }
    }
    getCustomersOrder(): Order[] { 
        return this.orders;
    }
    
}