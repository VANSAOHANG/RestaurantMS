import { Customer } from "../../../human/customer/Customer";
import { Table } from "../Table";
import { TableCategory } from "./TableCategory";

export class TableCircle extends Table {

    constructor(tableId: number) {
        super(tableId,3,TableCategory.CIRCLE);
    }

}