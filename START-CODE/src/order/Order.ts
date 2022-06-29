
import { OrderItem } from "./OrderItem";
import { Table } from "./table/Table";


export class Order {
    private orderStatus:string = 'Preparing';
    constructor(private orderId: number,private orderItem:OrderItem,private table: Table){}
    isHasCustomer():boolean{
        if(this.table.isHasCustomer()){
            return true;
        }
        return false;
    }

    getTableId() { return this.table};

    getOrderItem(){return this.orderItem};
    
    getOrderId(){
        return this.orderId;
    }

}