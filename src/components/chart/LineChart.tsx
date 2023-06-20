import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Filler, LinearScale } from 'chart.js/auto';
import { ChartData } from "@/types/chart";

type ChartProps = {
    data: ChartData
}
ChartJS.register(CategoryScale, LinearScale, Filler);

export const LineChart = ({data}: ChartProps) => {
    const chartData = {
        labels: data.labels,
          datasets: [
            {
                label: data.label,
                data: data.data,
                borderWidth: 2,
                borderColor: data.color,
                tension: .3,
            },
        ]
    
    }
    return (
        <div>
            <Line data={chartData} />
        </div>
    )
}