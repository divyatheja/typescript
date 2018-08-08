//Declaring variables with basic types using let

let productId:number=1045; //Declaring a numeric variable

let productDescription:string="16GB, Gold"; //Declaring a string variable

let productName:string="Samsung Galaxy J7"; 


let productAvailable: boolean = true;   //Declaring a boolean variable

console.log("The type of productId is " + typeof productId);

console.log("The type of productAvailable is "+typeof productAvailable);

console.log("The type of productName is "+typeof productName);

//Declaring variables using const

const discountPercentage:number=15;

console.log("Discount percentage is:"+discountPercentage);


console.log("hello type script pleas run");
for(var i=0; i<10 ; i++){ //let for ts
  setTimeout(function(){console.log(i);}, i *1000);
}

