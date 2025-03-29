import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import {
    FaDribbble,
    FaInstagram,
    FaBehance,
    FaGoogle,
    FaGlobe
} from 'react-icons/fa';
import { Platform } from '../../types';

interface PlatformStatsProps {
    platforms: Platform[];
}

const PlatformStats: React.FC<PlatformStatsProps> = ({ platforms }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'dribbble':
                return <FaDribbble className="text-pink-600" size={14} />;
            case 'instagram':
                return <FaInstagram className="text-purple-600" size={14} />;
            case 'behance':
                return <FaBehance className="text-blue-600" size={14} />;
            case 'google':
                return <FaGoogle className="text-red-500" size={14} />;
            default:
                return <FaGlobe className="text-gray-500" size={14} />;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
                <h2 className="text-sm font-medium text-gray-700">Work with platforms</h2>
                <div className="flex items-center bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-medium">
                    <span className="mr-1">5.3</span>
                    <span className="font-normal">$156,841</span>
                </div>
            </div>

            <div className="space-y-4">
                {platforms.map(platform => (
                    <div key={platform.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                                {getIcon(platform.icon)}
                            </div>
                            <span className="text-xs font-medium text-gray-700">{platform.name}</span>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="w-16 text-right">
                                <span className="text-xs font-medium text-gray-700">{platform.percentage.toFixed(1)}%</span>
                                <div className="text-xs text-gray-500">${platform.revenue.toLocaleString()}</div>
                            </div>

                            {platform.growth > 0 && (
                                <div className="flex items-center text-xs text-green-500">
                                    <FiArrowUp className="mr-0.5" size={10} />
                                    <span>{platform.growth}%</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlatformStats; 