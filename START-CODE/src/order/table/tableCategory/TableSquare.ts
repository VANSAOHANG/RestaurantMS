import { Customer } from "../../../human/customer/Customer";
import { Table } from "../Table";
import { TableCategory } from "./TableCategory";

export class TableSquare extends Table {

    protected customers: Customer[] = [];
    constructor(tableId: number) {
        super(tableId,2,TableCategory.SQUARE);
    }
 

}