'use client';

import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Search, Filter } from 'lucide-react';

const Filtering = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    // Inside Filtering.jsx -> handleFilter function
const handleFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    
    if (value && value !== 'all') {
        params.set(key, value);
    } else {
        params.delete(key);
    }
    
    // CRITICAL: Reset to page 1 whenever a filter changes
    params.delete('page'); 
    
    replace(`${pathname}?${params.toString()}`);
};

    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 rounded-2xl border-2 border-red-100 shadow-[0_0_20px_-5px_rgba(239,68,68,0.15)] transition-all duration-500 ">
            
            {/* Search Input with Animated Glow */}
            <div className="relative flex-1 group">
                <Search className="absolute left-3 top-3.5 text-red-500 transition-transform group-hover:scale-110" size={18} />
                <input 
                    type="text"
                    defaultValue={searchParams.get('search') || ''}
                    placeholder="Search your treasure..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-red-50 bg-red-50/30 text-white font-semibold focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-500/10 transition-all duration-300"
                    onChange={(e) => handleFilter('search', e.target.value)}
                />
            </div>

            {/* Category Select with Gradient Highlight */}
            <div className="relative group">
                <Filter className="absolute left-3 top-3.5 text-red-500 transition-transform group-hover:rotate-12" size={18} />
                <select 
                    defaultValue={searchParams.get('category') || 'all'}
                    className="pl-10 pr-10 py-3 rounded-xl border-2 border-red-50 bg-red-50/30 focus:bg-red-600 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-500/10 transition-all duration-300 appearance-none cursor-pointer hover:border-red-200"
                    onChange={(e) => handleFilter('category', e.target.value)}
                >
                    <option value="all" className="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Pets">Pets</option>
                </select>
                {/* Custom arrow indicator */}
                <div className="pointer-events-none absolute right-4 top-4 text-red-400">
                    ▼
                </div>
            </div>
        </div>
    );
};

export default Filtering;