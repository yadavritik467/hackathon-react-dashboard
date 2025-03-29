import React from 'react';
import { RevenueData } from '../../types';

interface RevenueCardProps {
    data: RevenueData;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ data }) => {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    const [wholeNumber, decimal] = data.total.toFixed(2).split('.');

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Revenue</h2>

            <div className="flex items-end mb-2">
                <span className="text-3xl font-bold text-gray-900">{formatCurrency(parseInt(wholeNumber))}</span>
                <span className="text-3xl text-gray-400 ml-0.5">.{decimal}</span>

                <div className="ml-3 px-2 py-0.5 bg-pink-100 text-pink-700 rounded text-xs font-medium flex items-center">
                    <span className="mr-1">+{data.percentage}%</span>
                    <span className="font-normal">{formatCurrency(227335)}</span>
                </div>
            </div>

            <div className="text-xs text-gray-500 mb-6">
                vs prev. {formatCurrency(data.previousPeriod)} · {data.timeframe[0]} - {data.timeframe[1]}
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
                <UserStat
                    avatar="/avatars/armin.jpg"
                    name="Armin A."
                    amount={209633}
                    percentage={39.63}
                />
                <UserStat
                    avatar="/avatars/mikasa.jpg"
                    name="Mikasa A."
                    amount={156841}
                    percentage={29.65}
                />
                <UserStat
                    avatar="/avatars/eren.jpg"
                    name="Eren Y."
                    amount={117115}
                    percentage={22.14}
                />
                <UserStat
                    avatar="/avatars/default.jpg"
                    name="Other"
                    amount={45386}
                    percentage={8.58}
                />
            </div>
        </div>
    );
};

interface UserStatProps {
    avatar: string;
    name: string;
    amount: number;
    percentage: number;
}

const UserStat: React.FC<UserStatProps> = ({ avatar, name, amount, percentage }) => {
    return (
        <div className="flex items-center">
            <div className="h-7 w-7 rounded-full overflow-hidden mr-2">
                <img
                    src={avatar || `https://ui-avatars.com/api/?name=${name}&background=random`}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </div>
            <div>
                <div className="text-sm font-medium text-gray-800">${(amount / 1000).toFixed(1)}k</div>
                <div className="text-xs text-gray-500">{percentage.toFixed(2)}%</div>
            </div>
        </div>
    );
};

export default RevenueCard; 