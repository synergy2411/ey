import { Person } from "./person";

export class Student{
    private firstName : string;
    private lastName : string;

    // constructor(firstName : string, lastName : string){
    // constructor(obj : Person){
    constructor({firstName , lastName } : Person){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello () : string {
        return "Helllo " + this.firstName + " " + this.lastName;
    }
}