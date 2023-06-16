import { Bar, Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, ChartOptions, Filler, LinearScale } from 'chart.js/auto'

ChartJS.register(CategoryScale, LinearScale, Filler);
const data = {

    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        fill: {value: 1},
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        tension: .3
      }]

}
export const LineChart = () => {
    return (
        <div className="">
            <Line data={data} />
        </div>
    )
}