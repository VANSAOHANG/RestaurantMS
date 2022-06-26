import { Customer } from "../../HumanManager/Customers/Customer";
import { TableCategory } from "./Table";
export class Chair{
    private customer: Customer;

    constructor (private tableId: number){}
}