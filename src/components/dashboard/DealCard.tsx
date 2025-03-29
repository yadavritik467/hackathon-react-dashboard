import React from 'react';
import { FiStar } from 'react-icons/fi';

interface DealCardProps {
    title: string;
    amount: number;
    company: string;
    user: {
        name: string;
        avatar?: string;
    };
    highlighted?: boolean;
}

const DealCard: React.FC<DealCardProps> = ({
    title,
    amount,
    company,
    user,
    highlighted = false
}) => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-medium text-gray-500">{title}</h3>
                {highlighted && (
                    <div className="text-yellow-400">
                        <FiStar className="h-4 w-4 fill-current" />
                    </div>
                )}
            </div>

            <div className="mb-4">
                <div className="text-xl font-bold text-gray-900 mb-1">
                    ${amount.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">{company}</div>
            </div>

            <div className="mt-auto flex items-center">
                <div className="h-5 w-5 rounded-full overflow-hidden mr-2 ring-2 ring-white">
                    <img
                        src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=random`}
                        alt={user.name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="text-xs text-gray-500">{user.name}</div>
            </div>
        </div>
    );
};

export default DealCard; 