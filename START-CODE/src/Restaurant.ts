import { Address } from "./Address";
import { HumanManagement } from "./human/HumanManagement";
import { Manager } from "./human/Staff/Manager";
import { TableManager } from "./order/table/TableManagement";
import { Menu } from "./stock/menu/Menu";


export class Restaurant {
    constructor(private name: string,private address?:Address) { }
    private manager?:Manager;
    setRestaurantAddress(address:Address){
        this.address = address;
    }
    public hr:HumanManagement = new HumanManagement();
    public tables:TableManager = new TableManager();
    public menu:Menu = new Menu();
    
    setManager(newManager:Manager){
        this.manager = newManager;
    }
}