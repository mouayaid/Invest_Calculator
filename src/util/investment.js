
export function calculateInvestmentResults({
  awalInves,
  annualInves,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = awalInves;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInves;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInves: annualInves,
    });
  }
  return annualData;
}


export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
