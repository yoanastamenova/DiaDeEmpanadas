export const fn = (a, b, c) => {
  //Declaring the variables and checking if they are in the correct range
  const total = a + b + c;
  if (Math.min(a, b, c) < 0) throw new Error("The input value cannot be negative");
  if (total % 3 !== 0) throw new Error("The total sum of inputs has to be a multiple of 3");
  if (total >= 40) throw new Error("The total sum of the inputs has to be less than 40");

  //Creating an array for the empanadas each of their own type, fills the arrays with prices and then makes them in a single array
  let empanadas = Array(a).fill(12).concat(Array(b).fill(14), Array(c).fill(16));
  
  //Here we have the calculation of the combined prices 
  let comPrice = [];

  while (empanadas.length > 1) {   //taking the last pieces of the empanadas, calculating their average n pushing it twice into combPrices array
    comPrice.push(...Array(2).fill((empanadas.shift() + empanadas.pop()) / 2));
  }
  if (empanadas.length === 1) comPrice.push(empanadas.pop()); //if one price is left in the empanadas then it is pushed to combPrices

  //sorts the prices from higher to lower
  comPrice.sort((a, b) => b - a);
  
  //final price const created which contains EVERY 3rd PRICE FROM THE SORTED PRICES
  const finalPrice = comPrice.filter((_, i) => i % 3 === 0);

  //lastly we return the total price by adding up all the pieces in the finalPrice array
  return finalPrice.reduce((total, price) => total + price, 0);
};