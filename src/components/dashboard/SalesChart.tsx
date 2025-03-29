import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { chartData } from '../../utils/mockData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const SalesChart: React.FC = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'white',
                titleColor: '#1f2937',
                bodyColor: '#1f2937',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 8,
                boxPadding: 4,
                usePointStyle: true,
                titleFont: {
                    size: 12,
                },
                bodyFont: {
                    size: 12,
                },
                callbacks: {
                    label: function (context: any) {
                        return `$${context.parsed.y.toLocaleString()}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                    color: '#9ca3af',
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f3f4f6',
                },
                border: {
                    dash: [5, 5],
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                    color: '#9ca3af',
                    callback: function (value: any) {
                        return `$${value / 1000}k`;
                    },
                },
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
            point: {
                radius: 0,
                hoverRadius: 5,
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-sm h-full p-3 sm:p-4 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-2 sm:mb-0">
                <h2 className="text-sm font-medium text-gray-700">Sales dynamic</h2>
                <div className="flex flex-wrap gap-2 sm:space-x-3 text-xs">
                    <div className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-1"></div>
                        <span className="text-gray-500">W 1</span>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-1"></div>
                        <span className="text-gray-500">W 3</span>
                    </div>
                    <div className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-pink-500 mr-1"></div>
                        <span className="text-gray-500">W 5</span>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-1"></div>
                        <span className="text-gray-500">W 7</span>
                    </div>
                    <div className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-1"></div>
                        <span className="text-gray-500">W 9</span>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-1"></div>
                        <span className="text-gray-500">W 11</span>
                    </div>
                </div>
            </div>

            <div className="h-40 sm:h-60 w-full mt-2">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default SalesChart; 