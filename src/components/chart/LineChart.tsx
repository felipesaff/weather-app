import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Filler, LinearScale } from 'chart.js/auto';

type ChartProps = {
    color: string;
    label: string;
}

export const LineChart = ({color, label}: ChartProps) => {
    ChartJS.register(CategoryScale, LinearScale, Filler);
    const data = {
    
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            fill: 'origin',
            label,
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 2,
            borderColor: color,
            tension: .3,
          }]
    
    }
    return (
        <div className="">
            <Line data={data} />
        </div>
    )
}