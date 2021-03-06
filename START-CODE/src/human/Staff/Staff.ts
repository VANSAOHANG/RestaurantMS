import { Order } from "../../order/Order";
import { OrderManagement } from "../../order/OrderManagement";
import { Gender, Person } from "../Person";

export enum StaffCategory {
  CHEF = "Chef",
  MANAGER = "Manager",
  RECEIPTIONIST = "Receiptionist",
  WAITER = "Waiter",
}

/**
 * A staff is a personn of the hospital with a salary
 */
export abstract class Staff extends Person {

  protected salary: number = 0; // by default
  protected staffCategory?:StaffCategory;
  // protected isStaffFree: boolean = true;
  constructor(
    name: string,
    age: number,
    gender: Gender
  ) {
    super(name, age, gender);
  }
  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  // getStaffCategory(){
  //   return this.staffCategory;
  // }

  getStaffStatus(){
    return this.getStaffStatus;
  }


}

