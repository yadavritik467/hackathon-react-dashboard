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
        <div className="px-8 py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-light text-gray-900">Sales Report</h1>
                <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-200 rounded-md">
                        <button className="flex items-center justify-center px-3 py-1.5 text-xs font-medium bg-white text-gray-800">
                            Week
                        </button>
                        <button className="flex items-center justify-center px-3 py-1.5 text-xs font-medium bg-gray-50 text-gray-500">
                            Month
                        </button>
                        <button className="flex items-center justify-center px-3 py-1.5 text-xs font-medium bg-gray-50 text-gray-500">
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

            <div className="mt-6">
                <PlatformVisual />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="col-span-2">
                    <div className="bg-white rounded-lg p-6 shadow-sm h-80">
                        <SalesChart />
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-lg p-6 shadow-sm h-80">
                        <PlatformStats platforms={platformData} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-6">
                {mockDeals.map((deal, index) => (
                    <DealCard key={index} {...deal} />
                ))}
            </div>

            <div className="mt-6">
                <SalesTable data={salesData} />
            </div>
        </div>
    );
};

export default Dashboard; 