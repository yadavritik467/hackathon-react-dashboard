import React from 'react';
import { FiStar, FiChevronRight, FiChevronDown } from 'react-icons/fi';

const RevenueSection: React.FC = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            {/* Revenue Header */}
            <div className="text-gray-600 font-medium text-sm mb-1">Revenue</div>


            <div className='grid grid-cols-12 gap-2 grid-items-center'>

                {/* Revenue Amount with Badge */}
                <div className="col-span-4 flex items-center gap-3 mb-1">
                    <div className="flex items-baseline">
                        <span className="text-4xl font-semibold text-gray-900">$528,976</span>
                        <span className="text-4xl font-light text-gray-300">.82</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-rose-500 text-white px-2 py-0.5 rounded text-xs font-medium">+7.9%</span>
                        <span className="text-gray-400 text-xs">$27,336.35</span>
                    </div>
                </div>

                {/* Stats Cards Row */}
                <div className="col-span-8 grid grid-cols-4 gap-3 mb-6">
                    {/* Top Sales Card */}
                    <div className="bg-gray-50 rounded-lg p-3 col-span-1">
                        <div className="text-xs text-gray-500 mb-1">Top sales</div>
                        <div className="font-semibold text-xl text-gray-900 mb-1">72</div>
                        <div className="flex items-center text-xs">
                            <div className="flex items-center">
                                <div className="w-5 h-5 rounded-full overflow-hidden bg-sky-500 mr-1 flex items-center justify-center text-[10px] text-white font-medium">M</div>
                                <span className="text-gray-600">Mikasa</span>
                            </div>
                            <FiChevronRight size={14} className="text-gray-400 ml-auto" />
                        </div>
                    </div>

                    {/* Best Deal Card */}
                    <div className="bg-gray-900 rounded-lg p-3 col-span-1 text-white relative">
                        <div className="text-xs text-gray-400 mb-1">Best deal</div>
                        <div className="font-semibold text-xl mb-1">$42,300</div>
                        <div className="flex items-center text-xs">
                            <span className="text-gray-300">Rolf Inc.</span>
                            <div className="ml-auto bg-white text-black rounded w-5 h-5 flex items-center justify-center">
                                <span className="text-[10px] font-bold">3</span>
                            </div>
                        </div>
                        <FiStar size={16} className="absolute top-3 right-3 text-gray-700 cursor-pointer" />
                    </div>

                    {/* Deals Card */}
                    <div className="border border-gray-100 rounded-lg p-3 col-span-1">
                        <div className="text-xs text-gray-500 mb-1">Deals</div>
                        <div className="font-semibold text-xl text-gray-900 mb-1">5</div>
                        <div className="flex items-center">
                            <span className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded text-xs font-medium">+7.9%</span>
                        </div>
                    </div>

                    {/* Value and Win Rate Cards Combined */}
                    <div className="grid grid-cols-2 gap-3 col-span-1">
                        {/* Value Card */}
                        <div className="border border-gray-100 rounded-lg p-3">
                            <div className="text-xs text-gray-500 mb-1">Value</div>
                            <div className="font-semibold text-lg text-gray-900 mb-1">88%</div>
                        </div>

                        {/* Win Rate Card */}
                        <div className="border border-gray-100 rounded-lg p-3">
                            <div className="text-xs text-gray-500 mb-1">Win rate</div>
                            <div className="font-semibold text-lg text-gray-900 mb-1">12%</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Date Range */}
            <div className="text-xs text-gray-500 mb-6 flex items-center">
                <span>vs prev. $501,640.73</span>
                <span className="mx-2">Jun 1 - Aug 31, 2023</span>
                <FiChevronDown size={12} className="text-gray-400" />
            </div>

            {/* User Stats Row */}
            <div className="flex items-center border-t border-gray-100 pt-3 gap-8">
                <UserStat avatar="M" bgColor="bg-gray-800" amount="$209,633" percent="39.63%" />
                <UserStat avatar="C" bgColor="bg-sky-500" amount="$156,841" percent="29.65%" />
                <UserStat avatar="R" bgColor="bg-amber-500" amount="$117,115" percent="22.14%" />
                <UserStat avatar="G" bgColor="bg-gray-500" amount="$45,386" percent="8.58%" />

                <button className="ml-auto bg-gray-900 text-white rounded-full px-4 py-1.5 text-xs font-medium">
                    Details
                </button>
            </div>
        </div>
    );
};

interface UserStatProps {
    avatar: string;
    bgColor: string;
    amount: string;
    percent: string;
}

const UserStat: React.FC<UserStatProps> = ({ avatar, bgColor, amount, percent }) => {
    return (
        <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full ${bgColor} flex items-center justify-center text-xs text-white font-medium`}>
                {avatar}
            </div>
            <div>
                <div className="text-sm font-medium text-gray-900">{amount}</div>
                <div className="text-xs text-gray-500">{percent}</div>
            </div>
        </div>
    );
};

export default RevenueSection; 