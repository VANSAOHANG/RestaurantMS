
import { CustomerInvoice } from "../../human/customer/CustomerInvoice";
import { Order } from "../Order";

export class Bill {

    protected billId?: number 
    protected orderId?: number
    protected foodAndQuantity?: string;
    protected totalBill?: number
    

    calculateBill(billId:number,order: Order) {

        let newBill = new Bill();
        newBill.billId = billId;

        let orderItem = order.getOrderItem().getOrderItem();
        let totalprice:number = 0;

        for (const item of orderItem) {
            totalprice += item.getPrice()*item.getQuantity();
        }
        newBill.orderId = order.getOrderId();
        newBill.totalBill = totalprice;

        let invoice = new CustomerInvoice("6/29/2022");
        invoice.customerInvoice(order,totalprice);
        invoice.setTotalPrice(totalprice);
        invoice.setInvoiceStatus();
        console.log(invoice);
        

        return newBill;
    }
}