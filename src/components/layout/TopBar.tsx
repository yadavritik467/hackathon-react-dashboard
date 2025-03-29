import React from 'react';
import { FiPlus } from 'react-icons/fi';
import {
    FaUserAstronaut,
    FaUserNinja,
    FaUserSecret,
    FaUserTie,
    FaUserMd,
    FaUserGraduate
} from 'react-icons/fa';

const TopBar: React.FC = () => {
    // Define icon set with associated colors
    const userIcons = [
        { id: '1', icon: FaUserAstronaut, color: 'bg-purple-500' },
        { id: '2', icon: FaUserNinja, color: 'bg-blue-500' },
        { id: '3', icon: FaUserSecret, color: 'bg-amber-500' },
        { id: '4', icon: FaUserTie, color: 'bg-emerald-500' },
        { id: '5', icon: FaUserMd, color: 'bg-rose-500' },
        { id: '6', icon: FaUserGraduate, color: 'bg-cyan-500' },
    ];

    return (
        <div className="bg-white border-b border-gray-200 py-2 px-6 flex items-center justify-between">
            <div className="flex-1 flex items-center space-x-2">
                <div className="relative max-w-md">
                    <input
                        type="text"
                        placeholder="Try searching 'insights'"
                        className="w-full pl-10 pr-4 py-1.5 rounded-full bg-gray-100 border-none text-sm focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100">
                    <FiPlus className="h-4 w-4" />
                </button>

                <div className="flex -space-x-2 overflow-hidden">
                    {userIcons.map((user) => {
                        const IconComponent = user.icon;
                        return (
                            <div
                                key={user.id}
                                className={`inline-block h-7 w-7 rounded-full ring-2 ring-white ${user.color} flex items-center justify-center text-white shadow-sm`}
                                title={`Team member ${user.id}`}
                            >
                                <IconComponent className="h-3.5 w-3.5" />
                            </div>
                        );
                    })}
                    <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-gray-800 flex items-center justify-center text-white text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar; 