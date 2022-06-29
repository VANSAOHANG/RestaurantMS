import { Customer } from "../human/customer/Customer";
import { Drink } from "../stock/menu/beverages/Drink";
import { Dessert } from "../stock/menu/dessert/Dessert";
import { Food } from "../stock/menu/foods/food";
import { Item } from "../stock/menu/Item";
import { OrderItem } from "./OrderItem";
import { Table } from "./table/Table";


export class Order {
    private orderStatus:string='Preparing';
    constructor(private orderId: number,private orderItem:OrderItem,private table: Table){}
    isHasCustomer():boolean{
        if(this.table.isHasCustomer()){
            return true;
        }
        return false;
    }

    getTableId() { return this.table};

    getOrderItem(){return this.orderItem};

}