import { Table } from "./Table";

export class TableManager {
    private tables: Table[] = [];
    addTable(...table: Table[]) {
        this.tables = this.tables.concat(table)
    }

    getFirstFreeTable():undefined|Table{
        for (const table of this.tables) {
            if(! table.isHasCustomer()){
                return table;
            }
        }
        return undefined;
    }
}