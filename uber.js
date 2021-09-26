class uber{
    constructor(name,pickuplocation,destination,distance){
      this.name=name || "unknown";
      this.pickuplocation=pickuplocation || "unknown";
      this.destination=destination || "unknown";
      this.distance=distance || 0;
      this.price=function(){
          console.log(
         `Cost for 1km: Rs.20, 
          Pick-Up-Location:${this.pickuplocation} 
          Destination:${this.destination}  
          Distance: ${this.distance} 
          your price:`,(20*this.distance));
      }
    }
}
const customer1=new uber("deepa","chennai","salem","350");
customer1.price();