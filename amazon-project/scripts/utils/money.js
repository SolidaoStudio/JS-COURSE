export function formatCurrency (x){
  const priceFixed = (x / 100).toFixed(2);
  return priceFixed;
}
