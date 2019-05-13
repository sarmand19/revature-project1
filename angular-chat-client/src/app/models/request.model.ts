export class Request{

   
   rembId:number;
   amount:number;
   timeSubmitted:any;
   timeResolved:any;
   description:string;
   receipt:string;
   authorNumber:number;
   resolveNumber:number;
   statusId:number;
   typeId:number;

constructor(rembId:number,amount:number,timeSubmitted:any,timeResolved:any,
            description:string,receipt:string,authorNumber:number,resolveNumber:number,
            statusId:number,typeId:number){

            this.rembId = rembId;
            this.amount = amount;
            this.timeSubmitted = timeSubmitted;
            this.timeResolved = timeResolved;
            this.description = description;
            this.receipt = description;
            this.authorNumber = authorNumber;
            this.resolveNumber = resolveNumber;
            this.statusId = statusId;
            this.typeId = typeId;
        }


}