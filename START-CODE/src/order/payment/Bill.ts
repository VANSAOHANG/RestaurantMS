import { Customer } from "../../human/customer/Customer";
import { Order } from "../Order";

export class Bill {
    constructor(    
        private billId: number,
        private totalBill: number,
        private orderId: number
    ){}

    calculateBill(orders:Order,customer:Customer){
    }
}