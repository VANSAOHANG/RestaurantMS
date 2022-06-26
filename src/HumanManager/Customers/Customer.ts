import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "../Staff/Staff";


export class Customer extends Staff {
    constructor(firstName: string, lastName: string, age: number, gender: Gender) {
        super(firstName, lastName, age, gender);
    }

    isEqual(other: Customer): boolean {
        if (
            this.firstName === other.firstName &&
            this.age === other.age &&
            this.gender === other.gender
        ) {
            return true;
        }
        return false;
    }

    makeOrder(){

    }

    // paymentStatus():boolean{

    // }
}
