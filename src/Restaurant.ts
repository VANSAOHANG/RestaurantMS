import { Address } from "./Address";
import { HumanManagement } from "./HumanManager/HumanManagement";
import { Person } from "./HumanManager/Person";
import { Manager } from "./HumanManager/Staff/Manager";

export class Restaurant {
  constructor(private name: string, private address: Address) { }

  private manager? : Manager;
  public hr: HumanManagement = new HumanManagement();

  setManager(newManager:Manager):Manager{
    return this.manager = newManager;
  }
}