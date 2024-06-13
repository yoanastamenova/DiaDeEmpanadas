export const fn = (a, b, c) => {
   let conjunto = a + b + c;
   let tipoA = 12;
   let tipoB = 14;
   let tipoC = 16;
   let precioFinal;

   if(a < 0 || b < 0 || c < 0){
      console.log("Enter valid number of empanadas");
   }
   
   if(a + b + c > 40){
      console.log("The total of empanadas surpasses the max amount!");
   }

   if(a + b + c % 3 !== 0){
      console.log("The total could not be divided by 3!");
   }

   /*we always need to have 1 of each since the promo is 3x1 
   as well, we need to identify the most and the least expensive prices in order to divide the total cost*/
  t
   if(tipoA == 1 && tipoB == 1 + tipoC == 1){
      console.log((tipoA+tipoB+tipoC)/3 == 14);
   }

   if(tipoA == 2 && tipoB == 0 && tipoC ==1){
      console.log((tipoA+tipoB+tipoC)/3 == 14)
   }

   if(tipoA == 3 && tipoB == 3 && tipoC ==0){
      console.log((tipoA+tipoB+tipoC)/3 == 26)
   }

   if(tipoA == 9 && tipoB == 10 && tipoC == 11){
      console.log((tipoA+tipoB+tipoC)/3 == 142);
   }
   
   else {
      console.log("The values are not valid! Please, try again!")
   }
};




