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
        protected name: string,
        protected age: number,
        protected gender: Gender
    ) { }

    abstract setPhone(newPhoneNumber: number): number
}