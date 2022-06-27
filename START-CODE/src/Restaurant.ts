import { Address } from "./Address";
import { HumanManagement } from "./HumanManager/HumanManagement";
import { Manager } from "./HumanManager/Staff/Manager";

export class Restaurant {
    constructor(private name: string,private address?:Address) { }
    private manager?:Manager;
    setRestaurantAddress(address:Address){
        this.address = address;
    }
    public hr:HumanManagement = new HumanManagement();
    setManager(newManager:Manager){
        this.manager = newManager;
    }
}