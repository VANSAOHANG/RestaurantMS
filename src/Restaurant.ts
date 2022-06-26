import { Address } from "./Address";
import { HumanManager } from "./HumanManager/HumanManagement";

export class Restaurant {
    constructor(private name: string, private address: Address) { }
  public hr: HumanManager = new HumanManager();

}