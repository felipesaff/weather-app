import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LinearScale  } from 'chart.js/auto';
import { ChartData } from "@/types/chart";

type ChartProps = {
    data: ChartData[]
}
ChartJS.register(CategoryScale, LinearScale);

export const MultiLineChart = ({ data }: ChartProps) => {
    const chartData = {
        labels: data[0].labels,
        datasets: data.map(item => ({
        label: item.label,
        data: item.data,
        borderWidth: 2,
        borderColor: item.color,
        tension: .3
    }))
    
    }
    return (
        <div>
            <Line data={chartData} />
        </div>
    )
}