import { Chair } from "../Chair";
import { TableCategory } from "./TableCategory/TableCategory";



export abstract class Table {

    private chairs: Chair[] = [];
    constructor(private tableId: number, private maxChairs: number, private tableCategory: TableCategory) { }

    addChair(newChair: Chair) {
        this.chairs.push()

    }
}