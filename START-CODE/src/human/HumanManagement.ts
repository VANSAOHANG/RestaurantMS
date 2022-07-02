import { Customer } from "../human/customer/Customer";
import { Staff, StaffCategory } from "./Staff/Staff";

export class HumanManagement {
    private staffs: Staff[] = [];
    private customers: Customer[] = [];

    getStaffs() {
        return this.staffs;
    }
    addStaff(...newStaff: Staff[]) {
        this.staffs = this.staffs.concat(newStaff);
    }
    getCustomers() {
        return "In the restaurant there are : " + this.customers.length;
    }
    addCustomer(...newCustomer: Customer[]) {
        this.customers = this.customers.concat(newCustomer);
    }

    getTotalStaff(){
        return "In this restaurant there are: " + this.getStaffs().length + " staffs";
    }

}