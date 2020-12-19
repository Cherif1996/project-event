export class Event {

    public _id:string;
    public name: string;
    public description: string;
    public price : number;

    constructor(_id:string, name:string, description:string, price:number){
        this._id=_id;
        this.name=name;
        this.description =description;
        this.price=price;

    }



}
