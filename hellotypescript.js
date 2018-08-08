//Declaring variables with basic types using let
var productId = 1045; //Declaring a numeric variable
var productDescription = "16GB, Gold"; //Declaring a string variable
var productName = "Samsung Galaxy J7";
var productAvailable = true; //Declaring a boolean variable
console.log("The type of productId is " + typeof productId);
console.log("The type of productAvailable is " + typeof productAvailable);
console.log("The type of productName is " + typeof productName);
//Declaring variables using const
var discountPercentage = 15;
console.log("Discount percentage is:" + discountPercentage);
console.log("hello type script pleas run");
for (var i = 0; i < 10; i++) { //let for ts
    setTimeout(function () { console.log(i); }, i * 1000);
}
