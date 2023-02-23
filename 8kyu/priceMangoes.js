// DESCRIPTION:
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

//my solution:
function mango(quantity, price) {
  freeMango = Math.floor(quantity / 3);
  result = (quantity - freeMango) * price;
  return result;
}
