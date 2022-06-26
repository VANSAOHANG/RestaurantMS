import { Customer } from "../../HumanManager/Customers/Customer";
import { TableCategory } from "./Table";
export class TableSeat{
    private customer: Customer;

    constructor (private tableId: number){}
}