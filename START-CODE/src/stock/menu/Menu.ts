
import { Item } from "./Item";

export class Menu{
    protected items: Item[] = [];

    addItem(...item:Item[]){
        this.items = this.items.concat(item);
    }

    getItemByCategory(){
        return this.items;
    }

}