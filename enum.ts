
enum MobilePrice{Black=25000,Gold=28000,White=30000};

function calculateAmount(mobile:string):number{
    let discount: number;
    let totalAmount: number;
    console.log("###########s " + MobilePrice[mobile]);
if(MobilePrice.Black==MobilePrice[mobile]){
    discount=5;
    console.log("###########s " + MobilePrice[mobile]);
}
      
else if(MobilePrice[mobile]==MobilePrice.White)
  discount=8;
else
    discount = 10;

totalAmount =MobilePrice[mobile]- (MobilePrice[mobile] * discount / 100);
return totalAmount;
}
console.log("Actual price of the Mobile is " + MobilePrice.Black);
console.log("The final price after discount is "+calculateAmount('Black')); //(MobilePrice.Black)