import { Customer } from "./Customers/Customer";
import { Staff } from "./Staff/Staff";

export class HumanManagement {
    private staffs:Staff[] = [];
    private customers:Customer[]=[];

    getStaffs(){
        return this.staffs;
    }
    addStaff(newStaff:Staff){
        this.staffs.push(newStaff);
    }
    getCustomers(){
        return this.customers;
    }
    addCustomer(newCustomer:Staff){
        this.staffs.push(newCustomer);
    }
}