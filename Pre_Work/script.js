function greeting() {
    console.log("Hi there, today is a good dday to learn JS");
}

greeting();

function product(name, price) {
    return "The product: " + name + " costs €" + price;
}
console.log(product("Bread", 1.99));
console.log(product("Pudding", 1.50));


function returnParam(param1, param2) {
    var result = `This is parameter1: ${param1} and this is parameter2: ${param2}`;
    console.log(result);
    return result;
}

returnParam("Tesla", "Volvo");
// console.log(result);
                                                                // when do you choose var or let and why does this console.log not work??
// This is parameter1: Tesla and this is parameter2: Volvo


function kmToMiles(km) {
    var result = km / 1.609;
    console .log(result);
    return result;
  }
   kmToMiles(20);


   function footToMeter(foot) {
    var result = foot / 3.281 ;
    console.log(result);
    return result;
}
 var foot = footToMeter(5);
console.log(foot + " meters" );
//1.5239256324291375 meters

var area = (function() {  
    var width = 3 ;
    var somethin = 23534465 ;
    var height = 2;
    a = width + somethin;

    return  width * height;
}() );
                                    
console.log(area);
// document.write(area);

function getResult( numberOne, numberTwo, numberThree) {
    var sum = numberOne + numberTwo + numberThree;
    var multiply = numberOne * numberTwo * numberThree;
    var subtract = numberOne - numberTwo - numberThree;
    var division = numberOne / numberTwo / numberThree;


    var result = [sum, multiply,subtract,division];
    return result;
    }

    document.write(getResult(2, 7 , 5)[0]);
    document .write( "<br/>");
    document.write(getResult (2 , 7, 5)[1]);
    document .write( "<br/>");
    document.write(getResult (2 , 7, 5)[2]);
    document .write( "<br/>");
    document.write(getResult (2 , 7, 5)[3]);


    const noParams = () => 4*20; //no parameters
    console.log(noParams()); // 80

    const luckyNumber = one => console.log(one);
    //if only one parameter no "()" needed
    luckyNumber(1); // 1
    
    document.write("<br>")
    var randomNum = Math.floor(Math .random() * 11);

    document.write(randomNum);


    document.write("<br>")
    document.write(Math.floor(Math.random() * 100));

    document.write("<br>")

    var today = Date();

document.write(today);

alert("Hi, please click the button and I will disappear :-)");
