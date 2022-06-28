import { Customer } from "../human/customer/Customer";
import { MenuItem } from "../stock/menu/MenuItem";



export class Order { 
    private orderItem: MenuItem[] = [];

    constructor(private orderId: number, private customer: Customer){}


    makeOrder(item: MenuItem){
        this.orderItem.push(item);
    }


}