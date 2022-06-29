import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Manager extends Staff {

    protected staffCategory: StaffCategory = StaffCategory.MANAGER;
    constructor(name: string, age: number, gender: Gender) {
        super(name, age, gender);
    }

    isEqual(other: Manager): boolean {
        if (
            this.name === other.name &&
            this.age === other.age &&
            this.gender === other.gender &&
            this.staffCategory === other.staffCategory
        ) {
            return true;
        }
        return false;
    }
    setPhone(newPhoneNumber: number): number {
        return this.phoneNumber = newPhoneNumber;
    }
}
