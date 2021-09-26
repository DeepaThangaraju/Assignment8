
class circle{
    constructor(radius,color){
        this.radius=radius || 1.6;
        this.color=color || "red";
        
    }
    getradius(){
        return this.radius;
    }
    setradius(radius){
        this.radius=radius;
    }
    getcolor(){
        return this.color;
    }
    setcolor(radius){
        this.color=color;
    }
    getarea(){
        return (3.14*this.radius*this.radius).toFixed(2);
    }
    getcircumference(){
        return (2*3.14*this.radius).toFixed(2);
    }
    tostring(){
        return (JSON.stringify({radius:this.radius,color:this.color}));
    }
    
}
const cir1=new circle();
console.log(cir1.radius,cir1.color);
const cir2=new circle(4.8);
console.log(cir2.radius,cir2.color);
const cir3=new circle(23.5,"blue");
console.log(cir3.radius,cir3.color);
console.log(cir3.getradius());
cir3.setradius(1.2);
console.log(cir3.radius,cir3.color);
console.log(cir3.getcolor());
console.log(cir3.getarea());
console.log(cir3.getcircumference());
console.log(cir3.tostring());


