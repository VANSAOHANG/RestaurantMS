export enum Gender {
    MALE,
    FEMALE,
    OTHER,
}

/**
 * Any person in the hospital - common attributes
 */
export abstract class Person {
    protected phoneNumber?: number;
    constructor(
        protected name: string,
        protected age: number,
        protected gender: Gender
    ) { }

    setPhone(newPhoneNumber: number): number {
        return this.phoneNumber = newPhoneNumber;
    }
}