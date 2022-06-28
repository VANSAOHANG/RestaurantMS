import { Customer } from "../../human/customer/Customer";

export class Chair{
    private customer: Customer;

    constructor (private tableId: number){}
}