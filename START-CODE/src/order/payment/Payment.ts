import { CustomerInvoice } from "../../human/customer/CustomerInvoice";
import { Bill } from "./Bill";


export class Payment { 
    protected invoice : CustomerInvoice;
    checkPayment():boolean{
        if (this.invoice.getStatus()){
            return true;
        }
        return false;
    }
    
}