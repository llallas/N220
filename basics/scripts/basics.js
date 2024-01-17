//Variables
var firstName;
var classNum="N220"; //string 
var quote = "Hello world";
document.write("Hewo");
document.write(quote);
console.log(classNum);
var studentNum = 15; //Number 
var campacity = "true"; //Boolean
firstName ="Greg";
var lastName = "Brooks";
var fullName = firstName+" " + lastName;
document.write(fullName);


//Experessions and math Operators 
var studentCapacity = 20;
capacity = studentCapacity>studentNum;
console.log("Available seats: "+ (studentCapacity>studentNum)); //20>15

//Lunch Problem
var banana = 1.50;
var hotdog = 4.50; //Footlong
var chips = 1.75;
var drink = 2;
const TAXRATE = 0.08;
var lunchTotal = lunch+(lunch*TAXRATE);
console.log(lunchTotal);
var lunch = banana+hotdog+drink+(chips*2);
var cash = 13.25;
document.write("<p>Can I afford Lunch? "+(cash>lunchTotal)+"</p>")

