import { calculateInvestmentResults } from "../util/investment"

export default function Results({ input}) {
   const resultData = calculateInvestmentResults({input})
   console.log(resultData);
    return
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
            {resultData.map(yearData => {
                return <tr key={yearData.year}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            })}
        </tbody>
    </table>
}