import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

    export const options: ChartOptions = {
        responsive: true,
        backgroundColor: '#00f',
        plugins: {
        legend: {
            display: true,
            
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
        },
    };
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [
            10,23,34,34,5544,455,978
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

export const ChartComponent = () => {
    //const data = {
    //    labels: ['felipe', 'heloise', 'pedro', 'fulana'],
    //    datasets: [{
    //        label: '# of Votes',
    //        data: [12, 19, 3, 5],
    //        borderWidth: 1,
    //        backgroundColor: "#000"
    //    }]
    //}
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}