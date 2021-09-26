class person{
    constructor(firstname,lastname,age,country,phoneno,email,qualification){
        this.firstname=firstname|| "unknown";
        this.lastname=lastname||"unknown";
        this.age=age ||25;
        this.country=country || "india";
        this.phoneno=phoneno || "unknown";
        this.email=email || "unknown";
        this.qualification=qualification|| "unknown";
        this.print=function(){
            console.log(
                `Firstname: ${this.firstname}
                 Lastname: ${this.lastname}
                 Age: ${this.age}
                 Country:${this.country}
                 Phoneno:${this.phoneno}
                 e-mail:${this.email}
                 Qualification:${this.qualification}`
                
            );

        }
    }
}
var person1=new person("deepa","thangaraju",26,"india",1234567890,"deepat2405@gmail.com","B.E");
var person2=new person();
person1.print();
person2.print();

