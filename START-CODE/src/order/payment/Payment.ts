import { CustomerInvoice } from "../../human/customer/CustomerInvoice";



export class Payment { 
    protected invoice : CustomerInvoice;
    checkPayment():boolean{
        if (this.invoice.getStatus()){
            return true;
        }
        return false;
    }
    
}