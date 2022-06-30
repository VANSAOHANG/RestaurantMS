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
        return this.customers;
    }
    addCustomer(...newCustomer: Customer[]) {
        this.customers = this.customers.concat(newCustomer);
    }


}