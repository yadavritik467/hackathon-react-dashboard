import React, { ReactNode, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Check if screen is mobile on initial render and when window is resized
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Overlay */}
            {isMobile && sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`${isMobile
                        ? `fixed inset-y-0 left-0 z-30 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
                        : 'relative'
                    } transition-transform duration-300 ease-in-out`}
            >
                <Sidebar onCloseMobile={() => setSidebarOpen(false)} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar onMenuClick={toggleSidebar} />
                <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
                    {children}
                </main>
                <div className="md:hidden">
                    <BottomBar />
                </div>
            </div>
        </div>
    );
};

export default MainLayout; 