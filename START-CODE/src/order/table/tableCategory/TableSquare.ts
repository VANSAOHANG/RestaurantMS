import { Table } from "../Table";
import { TableCategory } from "./TableCategory";

export class TableSquare extends Table {
    constructor(tableId: number) {
        super(tableId,2,TableCategory.SQUARE);
    }
}