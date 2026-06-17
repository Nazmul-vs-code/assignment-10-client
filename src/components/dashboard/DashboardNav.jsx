"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav({ navItems }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4">
      <div className="mb-6 px-3">
        <h1 className="text-2xl font-extrabold text-primary tracking-tight">techBazar</h1>
      </div>
      {navItems.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Link key={item.label} href={item.link}>
            <Button
              variant={isActive ? "solid" : "ghost"}
              className={`w-full justify-start rounded-none ${isActive ? "bg-default-200" : ""}`}
            >
              <item.icon className="size-5" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}