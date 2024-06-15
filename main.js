export const fn = (a, b, c) => {
  const total = a + b + c;
  if (Math.min(a, b, c) < 0) throw new Error("The input value cannot be negative");
  if (total % 3 !== 0) throw new Error("The total sum of inputs has to be a multiple of 3");
  if (total >= 40) throw new Error("The total sum of the inputs has to be less than 40");

  let arrayEmpanadas = Array(a).fill(12).concat(Array(b).fill(14), Array(c).fill(16));

  let combinedPrices = [];
  while (arrayEmpanadas.length > 1) {
    combinedPrices.push(...Array(2).fill((arrayEmpanadas.shift() + arrayEmpanadas.pop()) / 2));
  }
  if (arrayEmpanadas.length === 1) combinedPrices.push(arrayEmpanadas.pop());

  combinedPrices.sort((a, b) => b - a);

  const toBePaid = combinedPrices.filter((_, i) => i % 3 === 0);

  return toBePaid.reduce((total, price) => total + price, 0);
};