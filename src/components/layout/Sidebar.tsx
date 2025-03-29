import React, { useState } from 'react';
import { FiStar, FiClock, FiList, FiTarget, FiGrid, FiSettings, FiChevronDown, FiChevronRight, FiX } from 'react-icons/fi';

interface SidebarProps {
    onCloseMobile?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCloseMobile }) => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleExpand = (label: string) => {
        setExpandedItems(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    return (
        <div className="h-screen w-[240px] md:w-[240px] bg-white border-r border-gray-100 flex flex-col relative">
            {/* Close button for mobile */}
            <button
                className="md:hidden absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
                onClick={onCloseMobile}
            >
                <FiX size={20} />
            </button>

            {/* Logo */}
            <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center">
                    <div className="bg-black rounded-full p-1.5 mr-2 flex items-center justify-center h-6 w-6">
                        <div className="text-white text-xs font-bold">C</div>
                    </div>
                    <span className="text-xs font-medium">Admin dashboard</span>
                    <svg className="ml-1 h-3 w-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-2 py-2">
                <NavItem icon={<FiStar size={14} />} label="Starred" />
                <NavItem icon={<FiClock size={14} />} label="Recent" />

                <div className="mt-4">
                    <NavItem icon={<FiList size={14} />} label="Sales list" />
                    <NavItem icon={<FiTarget size={14} />} label="Goals" />
                    <NavItem icon={<FiGrid size={14} />} label="Dashboard" active />
                </div>

                <div className="mt-4">
                    <div className="px-3 py-2 flex justify-between items-center">
                        <span className="text-[11px] font-medium text-gray-400 uppercase">Shared</span>
                        <button className="text-gray-400 hover:text-gray-600">
                            <span className="text-xs">+</span>
                        </button>
                    </div>
                    <NavItem label="Dashboard" />
                    <NavItem
                        label="Shared with me"
                        isDropdown
                        isExpanded={expandedItems.includes('Shared with me')}
                        onToggle={() => toggleExpand('Shared with me')}
                    >
                        <NavItem label="Team A" indent />
                        <NavItem label="Team B" indent />
                        <NavItem label="Marketing" indent />
                    </NavItem>
                    <NavItem label="Cargo2go" badge="3" />
                    <NavItem label="Cloud23r" badge="5" />
                    <NavItem label="Idioma" />
                    <NavItem label="Syllables" />
                    <NavItem label="x-0b" />
                </div>

                <div className="mt-4">
                    <div className="px-3 py-2 flex justify-between items-center">
                        <span className="text-[11px] font-medium text-gray-400 uppercase">Reports</span>
                        <button className="text-gray-400 hover:text-gray-600">
                            <span className="text-xs">+</span>
                        </button>
                    </div>
                    <NavItem
                        label="Share with me"
                        isDropdown
                        isExpanded={expandedItems.includes('Share with me')}
                        onToggle={() => toggleExpand('Share with me')}
                    >
                        <NavItem label="Weekly reports" indent />
                        <NavItem label="Monthly stats" indent />
                        <NavItem label="Annual review" indent />
                    </NavItem>
                    <NavItem label="Deals by user" />
                    <NavItem label="Deal duration" />
                </div>

                <div className="mt-4">
                    <div className="px-3 py-2">
                        <span className="text-[11px] font-medium text-gray-400 uppercase">My reports</span>
                    </div>
                    <NavItem label="Emails received" />
                    <NavItem label="Deal duration" />
                    <NavItem label="New report" isHighlighted />
                    <NavItem label="Analytics" badge="7" />
                </div>
            </div>

            {/* Settings */}
            <div className="p-4 border-t border-gray-100">
                <button className="flex items-center text-gray-500 hover:text-gray-700 text-xs">
                    <FiSettings className="mr-2" size={14} />
                    <span>Manage folders</span>
                </button>
            </div>
        </div>
    );
};

interface NavItemProps {
    icon?: React.ReactNode;
    label: string;
    isDropdown?: boolean;
    isExpanded?: boolean;
    badge?: string;
    isHighlighted?: boolean;
    indent?: boolean;
    active?: boolean;
    children?: React.ReactNode;
    onToggle?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
    icon,
    label,
    isDropdown = false,
    isExpanded = false,
    badge,
    isHighlighted = false,
    indent = false,
    active = false,
    children,
    onToggle
}) => {
    return (
        <>
            <div
                className={`px-3 py-1.5 mb-0.5 flex items-center justify-between rounded cursor-pointer 
                    ${active ? 'bg-rose-50 text-rose-500' : ''}
                    ${isHighlighted ? 'text-rose-500' : 'text-gray-600 hover:text-gray-900'}
                    ${indent ? 'pl-9' : ''}`}
                onClick={onToggle}
            >
                <div className="flex items-center">
                    {icon && <span className="mr-2.5 opacity-80">{icon}</span>}
                    <span className="text-xs font-medium">{label}</span>
                </div>
                <div className="flex items-center">
                    {badge && (
                        <span className="bg-gray-100 text-gray-600 text-[10px] rounded px-1.5 py-0.5 mr-2">
                            {badge}
                        </span>
                    )}
                    {isDropdown && (
                        isExpanded ?
                            <FiChevronDown className="w-3 h-3 text-gray-400" /> :
                            <FiChevronRight className="w-3 h-3 text-gray-400" />
                    )}
                </div>
            </div>
            {isExpanded && children && (
                <div className="mb-1">{children}</div>
            )}
        </>
    );
};

export default Sidebar; 