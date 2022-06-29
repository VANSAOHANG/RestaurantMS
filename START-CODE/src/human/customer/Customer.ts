
export class Customer  {
    constructor(private customerId:number){};
    isEqual(customer: Customer):boolean{
        if(this.customerId === customer.customerId){
            return true;
        }
        return false;
    }

    getCustomerId():number{
        return this.customerId;
    }
}
