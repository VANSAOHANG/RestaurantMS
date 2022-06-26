import { Chair } from "./Chair";

export enum TableCategory {
    CIRCLE,
    RECTANGLE,
    SQUARE
}
export class Table {
    private chairs:Chair[]=[];
    constructor(private tableId:number){}
}