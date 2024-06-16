export const fn = (a, b, c) => {
  //Declaring the variables and checking if they are in the correct range
  const total = a + b + c;
  //creating new variable for the total count of our empanadas

  if (Math.min(a, b, c) < 0) throw new Error("The input value cannot be negative");
  if (total % 3 !== 0) throw new Error("The total sum of inputs has to be a multiple of 3");
  if (total >= 40) throw new Error("The total sum of the inputs has to be less than 40");

  //New array of empanada prices. It creates three separate arrays for each type of empanada, fills them with the their prices, and then concatenates them into a single array.
  let empanadas = Array(a).fill(12).concat(Array(b).fill(14), Array(c).fill(16));
  
  //Here we have an array for the calculation of the combined prices 
  let comPrice = [];

  while (empanadas.length > 1) {   //Calculating the average prices as taking the first and last prices from the emp array, calculate the average (sum/count) and then push it twice into the combined prices array
    comPrice.push(...Array(2).fill((empanadas.shift() + empanadas.pop()) / 2));
  }    //this is repeated until there is only one price left in the empanadas array
  if (empanadas.length === 1) comPrice.push(empanadas.pop()); //if one price is left in the empanadas then it is pushed to combPrices

  //sorts the prices from higher to lower
  comPrice.sort((a, b) => b - a);
  
  //final price const created which contains EVERY 3rd PRICE FROM THE SORTED PRICES
  const finalPrice = comPrice.filter((_, i) => i % 3 === 0);

  //lastly we return the total price by adding up all the pieces in the finalPrice array
  return finalPrice.reduce((total, price) => total + price, 0);
};  