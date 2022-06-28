import { Gender, Person } from "../Person";

export class Customer extends Person {
    protected phoneNumber?: number;

    constructor(name: string, age: number, gender: Gender) {
        super(name, age, gender);
    }

    isEqual(other: Customer): boolean {
        if (
            this.name === other.name &&
            this.age === other.age &&
            this.gender === other.gender
        ) {
            return true;
        }
        return false;
    }
    setPhone(newPhoneNumber: number): number {
        return this.phoneNumber = newPhoneNumber;
    }
    makeOrder() {

    }

    // paymentStatus():boolean{

    // }
}
