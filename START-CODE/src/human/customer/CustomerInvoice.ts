import { Order } from "../../order/Order";
import { OrderItem } from "../../order/OrderItem";

export class CustomerInvoice {

    protected itemOrdered?: string;
    protected totalprice?:number;
    protected invoiceStatus?:boolean
    constructor(
        protected invoiceDate: string,
    ){}

    customerInvoice(ordered:Order,totalBill:number){
        let invoice = "";
        for (let item of ordered.getOrderItem().getOrderItem()){
            invoice += "name:" +   item.getName() + ", amount:" + item.getQuantity() + ", price:" + item.getPrice()+ "/1 ; ";
            // console.log(invoice);
            
        }
        this.itemOrdered  = invoice;
        this.totalprice = totalBill;
        this.invoiceStatus = true;
    }
    setTotalPrice(totalPrice:number){  
        this.totalprice = totalPrice; 
    };

    setInvoiceStatus() {
        this.invoiceStatus = true;
    }
    getStatus() { 
        return this.invoiceStatus;
    }
}