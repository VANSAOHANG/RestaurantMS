import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Manager extends Staff {
    private staffCategory: StaffCategory = StaffCategory.MANAGER;
    constructor(firstName: string, lastName: string, age: number, gender: Gender) {
        super(firstName, lastName, age, gender);
    }

    isEqual(other: Manager): boolean {
        if (
            this.firstName === other.firstName &&
            this.age === other.age &&
            this.gender === other.gender &&
            this.staffCategory === other.staffCategory
        ) {
            return true;
        }
        return false;
    }
}
