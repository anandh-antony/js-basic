let multiplier = 1.1;
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log('multiplier => ', multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
// multiplier = 1.2;
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

const calculateIncomeTaxAmount = createTaxCalculator(0.25);
