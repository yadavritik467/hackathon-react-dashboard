import React, { useState } from 'react';
import { SalesData } from '../../types';
import { FiTrendingUp, FiChevronDown, FiChevronUp, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface SalesTableProps {
    data?: SalesData[];
}

const SalesTable: React.FC<SalesTableProps> = ({ data = [] }) => {
    const [sortField, setSortField] = useState<keyof SalesData>('amount');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleSort = (field: keyof SalesData) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('desc');
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortField === 'user') {
            const nameA = a.user.name.toLowerCase();
            const nameB = b.user.name.toLowerCase();
            return sortDirection === 'asc'
                ? nameA.localeCompare(nameB)
                : nameB.localeCompare(nameA);
        }

        if (sortDirection === 'asc') {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });

    const filteredData = sortedData.filter(item =>
        item.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate pagination
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = parseInt(e.target.value);
        setPageSize(newSize);
        setCurrentPage(1); // Reset to first page when changing page size
    };

    const SortIcon = ({ field }: { field: keyof SalesData }) => {
        if (sortField !== field) return <FiChevronDown className="ml-1 opacity-40 w-3 h-3" />;
        return sortDirection === 'asc'
            ? <FiChevronUp className="ml-1 w-3 h-3 text-blue-500" />
            : <FiChevronDown className="ml-1 w-3 h-3 text-blue-500" />;
    };

    // Column definitions for responsive display
    const columns = [
        {
            id: 'user',
            label: 'Sales Representative',
            className: 'min-w-[200px]',
            render: (item: SalesData) => (
                <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-3 ring-2 ring-gray-100 flex-shrink-0">
                        <img
                            src={item.user.avatar || `https://ui-avatars.com/api/?name=${item.user.name}&background=random`}
                            alt={item.user.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="text-sm font-medium text-gray-900">{item.user.name}</div>
                </div>
            )
        },
        {
            id: 'amount',
            label: 'Revenue',
            className: 'min-w-[120px]',
            render: (item: SalesData) => (
                <div className="text-sm font-medium text-gray-900">${item.amount.toLocaleString()}</div>
            )
        },
        {
            id: 'deals',
            label: 'Leads',
            className: 'min-w-[100px]',
            render: (item: SalesData) => (
                <div className="flex items-center">
                    <div className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full 
                    ${item.deals > 40
                            ? 'bg-green-100 text-green-800'
                            : item.deals > 20
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                        }`}>
                        {item.deals}
                    </div>
                    <div className="text-xs text-gray-500 ml-2">/ {Math.floor(item.deals * 2.5)}</div>
                </div>
            )
        },
        {
            id: 'win_rate',
            label: 'Win Rate',
            className: 'min-w-[80px]',
            render: (item: SalesData) => (
                <div className={`text-sm font-medium ${item.win_rate > 0.8 ? 'text-green-600' :
                    item.win_rate > 0.7 ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                    {(item.win_rate * 100).toFixed(0)}%
                </div>
            )
        },
        {
            id: 'conversion',
            label: 'Conversion',
            className: 'min-w-[130px]',
            render: (item: SalesData) => (
                <div className="flex items-center">
                    <div className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${item.conversion > 35
                            ? 'bg-green-100 text-green-800'
                            : item.conversion > 25
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                        }`}>
                        {item.conversion}%
                    </div>
                    <div className="ml-2 text-xs text-gray-500">{Math.floor(Math.random() * 40) + 10}</div>
                    {item.conversion > 30 && (
                        <div className="text-green-500 ml-1.5">
                            <FiTrendingUp size={14} />
                        </div>
                    )}
                </div>
            )
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <h3 className="font-medium text-gray-700">Sales Performance</h3>
                    <div className="relative w-full sm:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by name..."
                            className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.id}
                                    className={`px-5 py-3 text-left ${column.className}`}
                                    onClick={() => handleSort(column.id as keyof SalesData)}
                                >
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center cursor-pointer">
                                        {column.label}
                                        <SortIcon field={column.id as keyof SalesData} />
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    {columns.map((column) => (
                                        <td key={`${item.id}-${column.id}`} className="px-5 py-4">
                                            {column.render(item)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-10 text-gray-500">
                                    No results found for "{searchQuery}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="text-sm text-gray-500 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
                    <span className="whitespace-nowrap">Showing {startIndex + 1} to {Math.min(startIndex + pageSize, totalItems)} of {totalItems} entries</span>
                    <div className="sm:ml-4 flex items-center">
                        <span className="mr-2 text-xs text-gray-500">Show:</span>
                        <select
                            value={pageSize}
                            onChange={handlePageSizeChange}
                            className="border border-gray-200 rounded px-2 py-1 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center space-x-1 self-center sm:self-auto">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`flex items-center justify-center h-8 w-8 rounded ${currentPage === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <FiChevronLeft size={16} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => {
                            // On mobile show fewer page numbers
                            const isMobile = window.innerWidth < 640;
                            if (isMobile) {
                                return page === 1 || page === totalPages || page === currentPage;
                            }
                            return page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1);
                        })
                        .map((page, index, array) => {
                            // Add ellipsis
                            if (index > 0 && page > array[index - 1] + 1) {
                                return (
                                    <React.Fragment key={`ellipsis-${page}`}>
                                        <span className="flex items-center justify-center h-8 px-2 text-gray-400">...</span>
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`flex items-center justify-center h-8 w-8 rounded ${currentPage === page
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    </React.Fragment>
                                );
                            }

                            return (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`flex items-center justify-center h-8 w-8 rounded ${currentPage === page
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })
                    }

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`flex items-center justify-center h-8 w-8 rounded ${currentPage === totalPages
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <FiChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SalesTable; 