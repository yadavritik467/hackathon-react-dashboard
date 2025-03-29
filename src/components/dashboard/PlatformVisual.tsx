import React, { useState } from 'react';
import { FaDribbble } from 'react-icons/fa';

const PlatformVisual: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Revenue');

    return (
        <div className="bg-white rounded-lg rounded-bl-[20%] shadow-sm">
            {/* Header Section with Platform and Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-100 gap-3">
                <div className="flex items-center">
                    <div className="h-8 w-8 bg-rose-100 rounded-full flex items-center justify-center mr-3">
                        <FaDribbble className="text-rose-500" size={16} />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500">Platform value</div>
                        <div className="flex items-center text-sm font-medium">
                            Dribbble
                            <svg className="h-3 w-3 text-gray-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex bg-gray-900 rounded-full text-xs self-start sm:self-auto">
                    <button
                        className={`px-3 py-1.5 rounded-full ${activeTab === 'Revenue' ? 'bg-black text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('Revenue')}
                    >
                        Revenue
                    </button>
                    <button
                        className={`px-3 py-1.5 rounded-full ${activeTab === 'Leads' ? 'bg-black text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('Leads')}
                    >
                        Leads
                    </button>
                    <button
                        className={`px-3 py-1.5 rounded-full ${activeTab === 'W/L' ? 'bg-black text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('W/L')}
                    >
                        W/L
                    </button>
                </div>
            </div>

            {/* Platform Metrics */}
            <div className="flex flex-col md:flex-row">
                {/* Left Side - Stats */}
                <div className="w-full md:w-[20%] bg-rose-500 md:rounded-tr-[20%] rounded-bl-[20%] overflow-hidden text-white p-4">
                    <div className="flex md:block justify-between">
                        <div className="py-1">
                            <div className="text-xs opacity-80">Revenue</div>
                            <div className="text-xl font-semibold">$18,552</div>
                        </div>
                        <div className="py-1">
                            <div className="text-xs opacity-80">Leads</div>
                            <div className="flex items-baseline">
                                <span className="text-xl font-semibold">373</span>
                                <span className="text-xs ml-1">/ 7,570</span>
                            </div>
                        </div>
                        <div className="py-1">
                            <div className="text-xs opacity-80">Win/rate</div>
                            <div className="flex items-baseline">
                                <span className="text-xl font-semibold">16%</span>
                                <span className="text-xs ml-1">51/318</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 text-xs opacity-80 text-center">
                        <span>Average monthly</span>
                    </div>
                </div>

                {/* Right Side - Bar Chart */}
                <div className="w-full md:w-[80%] p-4">
                    <div className="h-full flex flex-col">
                        {/* Bar Chart Labels */}
                        <div className="hidden sm:flex justify-between text-xs text-gray-400 mb-1 px-3">
                            <div>$16,052</div>
                            <div>$14,090</div>
                            <div>$11,000</div>
                            <div>$7,500</div>
                            <div>$4,000</div>
                        </div>

                        {/* Bar Chart */}
                        <div className="flex-1 flex justify-between items-end px-1 overflow-x-auto pb-2 sm:pb-0">
                            {/* Bar 1 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-rose-500 h-40 sm:h-64 rounded-t-md opacity-20 mb-2 relative">
                                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white text-xs rounded px-2 py-0.5">
                                        $10,025
                                    </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden mb-1 flex items-center justify-center text-xs font-medium text-gray-600">A</div>
                            </div>

                            {/* Bar 2 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-24 sm:h-40 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full bg-blue-500 mb-1 flex items-center justify-center text-xs font-medium text-white">B</div>
                            </div>

                            {/* Bar 3 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-16 sm:h-24 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full bg-amber-500 mb-1 flex items-center justify-center text-xs font-medium text-white">C</div>
                            </div>

                            {/* Bar 4 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-32 sm:h-48 rounded-t-md mb-2 relative">
                                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-0.5">
                                        $6,288
                                    </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-gray-800 mb-1 flex items-center justify-center text-xs font-medium text-white">D</div>
                            </div>

                            {/* Bar 5 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-20 sm:h-32 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full bg-blue-400 mb-1 flex items-center justify-center text-xs font-medium text-white">E</div>
                            </div>

                            {/* Bar 6 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-12 sm:h-16 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full bg-gray-600 mb-1 flex items-center justify-center text-xs font-medium text-white">F</div>
                            </div>

                            {/* Bar 7 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-14 sm:h-28 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full bg-blue-600 mb-1 flex items-center justify-center text-xs font-medium text-white">G</div>
                            </div>

                            {/* Bar 8 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-16 sm:h-20 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full bg-sky-400 mb-1 flex items-center justify-center text-xs font-medium text-white">H</div>
                            </div>

                            {/* Bar 9 */}
                            <div className="flex flex-col items-center min-w-[40px]">
                                <div className="w-8 sm:w-10 bg-gray-200 h-24 sm:h-36 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full bg-amber-600 mb-1 flex items-center justify-center text-xs font-medium text-white">I</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformVisual; 