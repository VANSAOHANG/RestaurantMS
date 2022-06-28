import { Table } from "../Table";
import { TableCategory } from "./TableCategory";

export class TableRectangle extends Table {
    constructor(tableId: number) {
        super(tableId,4,TableCategory.RECTANGLE);
    }
}