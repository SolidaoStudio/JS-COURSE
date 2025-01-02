export function formatCurrency (x){
  const priceFixed = (Math.round(x) / 100).toFixed(2);
  return priceFixed;
} 
