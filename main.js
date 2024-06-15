export const fn = (a, b, c) => {
  // Verify input values for being negative, dividable and 
  const quantity = a + b + c;
  if (quantity > 40) {
    throw new Error("Enter valid number of empanadas");
  }
  if (quantity % 3 !== 0) {
    throw new Error("The total of empanadas surpasses the max amount!");
  }
  if (Math.min(a, b, c) < 0) {
    throw new Error("The total could not be divided by 3!");
  }

  // Create an array of individual prices
  const price = [...Array(a).fill(12), ...Array(b).fill(14), ...Array(c).fill(16)];

  // Calculate the average prices
  const avgEmpanadas = [];
  do {
    if (price.length === 1) {
      avgEmpanadas.push(price[0]);
      break;
    }
    const aPrice = price.shift();
    const cPrice = price.pop();
    const midPrice = (aPrice + cPrice) / 2;
    avgEmpanadas.push(midPrice, midPrice);
  } while (price.length > 1);

  avgEmpanadas.sort((x, y) => y - x);
  const finalPrice = avgEmpanadas.reduce((final, inPrice, index) => {
    return index % 3 === 0
      ? final + inPrice
      : final;
  }, 0);

  return finalPrice;
};