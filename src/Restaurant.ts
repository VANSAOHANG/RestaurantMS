import { Address } from "./Address";
import { HumanManagement } from "./HumanManager/HumanManagement";

export class Restaurant {
    private address?:Address;
    constructor(private name: string) { }

    setRestaurantAddress(address:Address){
        this.address = address;
    }
    public hr:HumanManagement = new HumanManagement();
}