import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInves =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInves;
  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const Total =
            yearData.valueEndOfYear -
            yearData.annualInves * yearData.year -
            initialInves;
          const totalAmountInves = yearData.valueEndOfYear - Total;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(Total)}</td>
              <td>{formatter.format(totalAmountInves)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
