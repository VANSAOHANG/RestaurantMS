import { Table } from "./Table";

export class TableManager {
    private tables: Table[] = [];
    addTable(...table: Table[]) {
        this.tables = this.tables.concat(table)
    }

}