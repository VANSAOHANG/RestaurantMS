export enum Gender {
    MALE,
    FEMALE,
    OTHER,
}

/**
 * Any person in the hospital - common attributes
 */
export abstract class Person {
    protected phone?: number;

    constructor(
        protected firstName: string,
        protected lastName: string,
        protected age: number,
        protected gender: Gender
    ) { }

    setPhone(phone: number) {
        this.phone = phone;
    }
}