export const fn = (a, b, c) => {
   let conjunto = a + b + c;
   let tipoA;
   let tipoB;
   let tipoC;
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




};




