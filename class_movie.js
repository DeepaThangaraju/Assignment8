class movie{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating==null){
            this.rating="PG";
        }
        
}}
function getPg(c){
    var arr=[];
    for(var i in c){
        if(c[i].rating=="PG"){
            arr.push(c[i].title);
        }
    }
    return arr;
}
var c=[];
var movie1=new movie("Fast & Furious 7","Universal Studios ","PG-13");
console.log(movie1);
c.push(movie1);
var movie2=new movie("Man in Black","Marvel Comics","PG-13");
console.log(movie2);
c.push(movie2);
var movie3=new movie("Tangled","Disney ");
console.log(movie3);
c.push(movie3);
var movie4=new movie("Casino Royale","Eon Productions","PG-13");
console.log(movie4);
c.push(movie4);
var movie5=new movie("Tin-Tin","Disney ");
console.log(movie5);
c.push(movie5);
console.log(c);
console.log(getPg(c));


