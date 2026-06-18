"use client";

import { authClient } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { ChartArea, User2, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMoney } from "react-icons/bi";
import { useState } from "react";
import Logo from "../home/Logo";
import { FaProductHunt } from "react-icons/fa6";
import { FcBarChart, FcPackage, FcPlus, FcShop } from "react-icons/fc";
import { FaChartArea } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { Heart, Receipt } from "@gravity-ui/icons";

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const role = session?.user?.role || "buyer";
  const pathname = usePathname();

  const dashboardItems = {
    seller: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/seller" },
      { icon: FcPlus, label: "Create Products", link: "/dashboard/seller/products" },
      { icon: FaProductHunt, label: "My Products", link: "/dashboard/seller/my-products" },
      { icon: FcPackage, label: "My Orders", link: "/dashboard/seller/my-orders" },
      { icon: FaChartArea, label: "Analytics", link: "/dashboard/seller/analytics" },
    ],
    buyer: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/buyer" },
      { icon: Receipt, label: "My orders", link: "/dashboard/buyer/orders" },
      { icon: Heart, label: "My wishlist", link: "/dashboard/buyer/wishlist" },
      { icon: BiMoney, label: "My payment history", link: "/dashboard/buyer/payment" },
    ],
    admin: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/admin" },
      { icon: User2, label: "User Manage", link: "/dashboard/admin/users" },
      { icon: RiProductHuntLine, label: "Products Manage", link: "/dashboard/admin/products" },
      { icon: FcShop, label: "Orders Manage", link: "/dashboard/admin/orders" },
      { icon: FcBarChart, label: "Analytics", link: "/dashboard/admin/analytics" },
    ],
  };

  const navItems = dashboardItems[role] || dashboardItems.buyer;

  const NavContent = () => (
    <nav className="flex flex-col gap-2 p-4 h-full">
      <div className="mb-6 px-3">
        <h1 className="text-2xl font-extrabold text-primary tracking-tight">
          <Link href={'/'}><Logo /></Link>
        </h1>
      </div>
      {navItems.map((item) => {
        const isOverview = item.label === "Overview";
        const isActive = isOverview ? pathname === item.link : pathname.startsWith(item.link);
        return (
          <Link key={item.label} href={item.link} onClick={() => setIsOpen(false)}>
            <Button
              variant="ghost"
              className={`w-full justify-start rounded-none transition-colors ${
                isActive ? "bg-neutral-800 text-white hover:bg-neutral-900" : "text-foreground hover:bg-default-200"
              }`}
            >
              <item.icon className="size-5" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-default-200 h-screen bg-content1 shadow-sm">
        <NavContent />
      </aside>

      {/* Mobile Trigger */}
      <div className="lg:hidden p-4">
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-default-100 transition-colors"
        >
          <Bars /> Menu
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          
          {/* Content */}
          <div className="fixed left-0 top-0 bottom-0 w-64 bg-content1 shadow-2xl border-r border-default-200">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}><X /></button>
            </div>
            <NavContent />
          </div>
        </div>
      )}
    </>
  );
}