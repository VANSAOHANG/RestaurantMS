import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Waiter extends Staff {
    protected staffCategory: StaffCategory = StaffCategory.WAITER;
    constructor(name: string, age: number, gender: Gender) {
        super(name, age, gender);
    }

    isEqual(other: Waiter): boolean {
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

    getStaffCategory(){
        return this.staffCategory;
    }

    
}
