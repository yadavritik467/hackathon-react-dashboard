import React from 'react';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import {
    platformData,
    salesData
} from '../../utils/mockData';
import DealCard from './DealCard';
import PlatformStats from './PlatformStats';
import PlatformVisual from './PlatformVisual';
import RevenueSection from './RevenueSection';
import SalesChart from './SalesChart';
import SalesTable from './SalesTable';

// Sample mock deals data
const mockDeals = [
    {
        title: "New client",
        amount: 23400,
        company: "Axiom Inc.",
        user: { name: "Mike R." }
    },
    {
        title: "Renewal",
        amount: 17800,
        company: "Tensor Co.",
        user: { name: "Sarah L." }
    },
    {
        title: "Expansion",
        amount: 12650,
        company: "Acme Corp",
        user: { name: "John D." }
    },
    {
        title: "New deal",
        amount: 9200,
        company: "Vector Ltd",
        user: { name: "Anna K." }
    }
];

const Dashboard: React.FC = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl font-light text-gray-900">Sales Report</h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <div className="flex items-center border border-gray-200 rounded-md">
                        <button className="flex items-center justify-center px-2 sm:px-3 py-1.5 text-xs font-medium bg-white text-gray-800">
                            Week
                        </button>
                        <button className="flex items-center justify-center px-2 sm:px-3 py-1.5 text-xs font-medium bg-gray-50 text-gray-500">
                            Month
                        </button>
                        <button className="flex items-center justify-center px-2 sm:px-3 py-1.5 text-xs font-medium bg-gray-50 text-gray-500">
                            Year
                        </button>
                    </div>
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                        <FiShare2 className="h-4 w-4 mr-1" />
                        <span className="text-xs">Share</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                        <FiDownload className="h-4 w-4 mr-1" />
                        <span className="text-xs">Export</span>
                    </button>
                </div>
            </div>

            <RevenueSection />

            <div className="mt-4 sm:mt-6">
                <PlatformVisual />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg p-3 sm:p-6 shadow-sm h-auto sm:h-80">
                        <SalesChart />
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-lg p-3 sm:p-6 shadow-sm h-auto sm:h-80">
                        <PlatformStats platforms={platformData} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6">
                {mockDeals.map((deal, index) => (
                    <DealCard key={index} {...deal} />
                ))}
            </div>

            <div className="mt-4 sm:mt-6 overflow-x-auto">
                <SalesTable data={salesData} />
            </div>
        </div>
    );
};

export default Dashboard; 