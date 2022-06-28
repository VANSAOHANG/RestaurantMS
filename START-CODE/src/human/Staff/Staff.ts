import { Gender, Person } from "../Person";

export enum StaffCategory {
  CHEFT = "Chef",
  MANAGER = "Manager",
  RECEIPTIONIST = "Receiptionist",
  WAITER = "Waiter",
}

/**
 * A staff is a personn of the hospital with a salary
 */
export abstract class Staff extends Person {
  protected phoneNumber?: number;

  protected salary: number = 0; // by default
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
  abstract setPhone(newPhoneNumber: number): number ;
}

