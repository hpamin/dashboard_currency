import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceChart = ({pricesData, title}) => {

  const chartData = useMemo(() => ({

    labels: pricesData.map(item => item.date),
    datasets: [
      {
        label: title,
        data: pricesData.map(item => item.price),
        borderColor: '#627EFF',
        backgroundColor: '#F3F3F3',
        fill: true,
      },
    ],
  }), [pricesData]);

  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
  }), []);

  return (
    <div className='w-72 h-72 my-0 mx-auto'>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default React.memo(PriceChart);
