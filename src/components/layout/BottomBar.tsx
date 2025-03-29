import React from 'react';
import { FiPlus, FiSettings, FiSearch, FiUser, FiMessageCircle, FiGrid, FiBell } from 'react-icons/fi';

const BottomBar: React.FC = () => {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-1 py-1 flex items-center z-20 w-auto max-w-[90%] justify-center">
            <IconButton icon={<FiGrid size={18} />} />
            <IconButton icon={<FiSearch size={18} />} />
            <IconButton icon={<FiBell size={18} />} />
            <MainActionButton />
            <IconButton icon={<FiMessageCircle size={18} />} />
            <IconButton icon={<FiUser size={18} />} />
            <IconButton icon={<FiSettings size={18} />} className="hidden sm:block" />
        </div>
    );
};

const IconButton: React.FC<{ icon: React.ReactNode, className?: string }> = ({ icon, className = '' }) => {
    return (
        <button className={`p-2 sm:p-3 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 ${className}`}>
            {icon}
        </button>
    );
};

const MainActionButton: React.FC = () => {
    return (
        <button className="p-2 sm:p-3 bg-rose-500 text-white rounded-full mx-1 sm:mx-2 hover:bg-rose-600 shadow-md transform transition-transform hover:scale-105">
            <FiPlus size={20} strokeWidth={3} />
        </button>
    );
};

export default BottomBar; 