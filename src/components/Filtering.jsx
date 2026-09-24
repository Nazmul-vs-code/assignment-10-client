"use client";

import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search, Filter, ChevronDown } from "lucide-react";

const Filtering = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleFilter = (key, value) => {
        const params = new URLSearchParams(searchParams);

        if (value && value !== "all") {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        // Reset to page 1 whenever a filter changes
        params.delete("page");

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div
            className="
                group
                relative
                mb-8
                flex
                flex-col
                gap-4
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
                transition-all
                duration-500
                md:flex-row
                md:p-5
            "
        >
            {/* Subtle glass reflection */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-white/10
                "
            />

            {/* Subtle red liquid glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-red-500/[0.06]
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Search */}
            <div className="group/search relative flex-1">
                <Search
                    size={19}
                    strokeWidth={1.8}
                    className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        z-10
                        -translate-y-1/2
                        text-red-400
                        transition-all
                        duration-300
                        group-focus-within/search:scale-110
                        group-focus-within/search:text-red-300
                    "
                />

                <input
                    type="text"
                    defaultValue={searchParams.get("search") || ""}
                    placeholder="Search your treasure..."
                    onChange={(e) => handleFilter("search", e.target.value)}
                    className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-black/50
                        pl-11
                        pr-4
                        text-sm
                        font-medium
                        text-white
                        outline-none
                        backdrop-blur-xl
                        placeholder:text-zinc-600
                        transition-all
                        duration-300
                        hover:border-white/[0.14]
                        focus:border-red-500/40
                        focus:bg-black/70
                        focus:shadow-[0_0_30px_rgba(239,68,68,0.08)]
                    "
                />
            </div>

            {/* Category */}
            <div className="group/select relative md:min-w-[220px]">
                <Filter
                    size={18}
                    strokeWidth={1.8}
                    className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        z-10
                        -translate-y-1/2
                        text-red-400
                        transition-transform
                        duration-300
                        group-hover/select:rotate-6
                    "
                />

                <select
                    defaultValue={searchParams.get("category") || "all"}
                    onChange={(e) => handleFilter("category", e.target.value)}
                    className="
                        h-12
                        w-full
                        cursor-pointer
                        appearance-none
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-black/50
                        pl-11
                        pr-11
                        text-sm
                        font-medium
                        text-zinc-300
                        outline-none
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-white/[0.14]
                        focus:border-red-500/40
                        focus:bg-black/70
                        focus:shadow-[0_0_30px_rgba(239,68,68,0.08)]
                    "
                >
                    <option value="all" className="bg-zinc-950 text-zinc-300">
                        All Categories
                    </option>

                    <option
                        value="Electronics"
                        className="bg-zinc-950 text-zinc-300"
                    >
                        Electronics
                    </option>

                    <option
                        value="Vehicles"
                        className="bg-zinc-950 text-zinc-300"
                    >
                        Vehicles
                    </option>

                    <option
                        value="Pets"
                        className="bg-zinc-950 text-zinc-300"
                    >
                        Pets
                    </option>
                </select>

                <ChevronDown
                    size={17}
                    className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-zinc-500
                        transition-all
                        duration-300
                        group-hover/select:text-red-400
                    "
                />
            </div>
        </div>
    );
};

export default Filtering;