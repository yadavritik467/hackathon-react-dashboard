import React, { useState } from 'react';
import { FaDribbble } from 'react-icons/fa';

const PlatformVisual: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Revenue');

    return (
        <div className="bg-white rounded-lg rounded-bl-[20%] shadow-sm">
            {/* Header Section with Platform and Tabs */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
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

                <div className="flex bg-gray-900 rounded-full text-xs">
                    <button
                        className={`px-4 py-1.5 rounded-full ${activeTab === 'Revenue' ? 'bg-black text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('Revenue')}
                    >
                        Revenue
                    </button>
                    <button
                        className={`px-4 py-1.5 rounded-full ${activeTab === 'Leads' ? 'bg-black text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('Leads')}
                    >
                        Leads
                    </button>
                    <button
                        className={`px-4 py-1.5 rounded-full ${activeTab === 'W/L' ? 'bg-black text-white' : 'text-gray-400'}`}
                        onClick={() => setActiveTab('W/L')}
                    >
                        W/L
                    </button>
                </div>
            </div>

            {/* Platform Metrics */}
            <div className="flex">
                {/* Left Side - Stats */}
                <div className="w-[20%] bg-rose-500 rounded-tr-[20%] rounded-bl-[20%] overflow-hidden text-white p-4">
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
                    <div className="mt-2 text-xs opacity-80 text-center">
                        <span>Average monthly</span>
                    </div>
                </div>

                {/* Right Side - Bar Chart */}
                <div className="w-[80%] p-4">
                    <div className="h-full flex flex-col">
                        {/* Bar Chart Labels */}
                        <div className="flex justify-between text-xs text-gray-400 mb-1 px-3">
                            <div>$16,052</div>
                            <div>$14,090</div>
                            <div>$11,000</div>
                            <div>$7,500</div>
                            <div>$4,000</div>
                        </div>

                        {/* Bar Chart */}
                        <div className="flex-1 flex justify-between items-end px-1">
                            {/* Bar 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-rose-500 h-64 rounded-t-md opacity-20 mb-2 relative">
                                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white text-xs rounded px-2 py-0.5">
                                        $10,025
                                    </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden mb-1 flex items-center justify-center text-xs font-medium text-gray-600">
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-40 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-blue-500 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-24 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-amber-500 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 4 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-48 rounded-t-md mb-2 relative">
                                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-0.5">
                                        $6,288
                                    </div>
                                </div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-800 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjinRY0ig5swpwMtoKwsvNq9Q6VuWz7l4FpfK9UB7WmqMdRhLYsPN1gaOow4yuqvJwOA8&usqp=CAU"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 5 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-32 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-blue-400 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 6 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-16 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-600 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 7 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-28 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-blue-600 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjinRY0ig5swpwMtoKwsvNq9Q6VuWz7l4FpfK9UB7WmqMdRhLYsPN1gaOow4yuqvJwOA8&usqp=CAU"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 8 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-20 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-sky-400 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjinRY0ig5swpwMtoKwsvNq9Q6VuWz7l4FpfK9UB7WmqMdRhLYsPN1gaOow4yuqvJwOA8&usqp=CAU"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Bar 9 */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 bg-gray-200 h-36 rounded-t-md mb-2"></div>
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-amber-600 mb-1 flex items-center justify-center text-xs font-medium text-white">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjinRY0ig5swpwMtoKwsvNq9Q6VuWz7l4FpfK9UB7WmqMdRhLYsPN1gaOow4yuqvJwOA8&usqp=CAU"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformVisual; 