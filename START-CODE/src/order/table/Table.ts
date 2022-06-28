import { Customer } from "../../human/customer/Customer";
import { TableCategory } from "./tableCategory/TableCategory";



export abstract class Table {
    
    protected customers: Customer[]=[];
    constructor(private tableId: number,protected maxChairs: number, private tableCategory: TableCategory) { }
    isEqualCustomer(other: Customer): boolean {
        for(let customer of this.customers) {
            if(other.isEqual(customer)) {
                return true;
            }
        }
        return false;
    }
    addCustomer(customer: Customer) {

        if(this.maxChairs > this.customers.length && ! this.isEqualCustomer(customer)){
            this.customers.push(customer);
        }
    }
}