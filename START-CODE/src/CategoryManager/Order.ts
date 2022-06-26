import { Customer } from "../HumanManager/Customers/Customer";
import { MenuItem } from "./Menu/MenuItem";

export class Order { 
    private orderItem: MenuItem[] = [];

    constructor(private orderId: number, private customer: Customer){}


    makeOrder(item: MenuItem){
        this.orderItem.push(item);
    }


}