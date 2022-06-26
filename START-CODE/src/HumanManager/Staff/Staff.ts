import { Gender, Person } from "../Person";

export enum StaffCategory {
  CHEFT,
  MANAGER,
  RECEIPTIONIST,
  WAITER,
}

/**
 * A staff is a personn of the hospital with a salary
 */
export class Staff extends Person {
  protected salary: number = 0; // by default
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender
  ) {
    super(firstName,lastName, age, gender);
  }

  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}
