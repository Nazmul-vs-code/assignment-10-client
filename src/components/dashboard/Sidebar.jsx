"use client";

import { authClient } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import { Button, Avatar } from "@heroui/react";
import { ChartArea, User2, X, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiMoney } from "react-icons/bi";
import { useState } from "react";
import Logo from "../home/Logo";
import { FaLeftLong, FaProductHunt } from "react-icons/fa6";
import { FcBarChart, FcPackage, FcPlus, FcShop } from "react-icons/fc";
import { FaChartArea } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { Heart, Receipt } from "@gravity-ui/icons";
import { LuCircleArrowOutDownLeft } from "react-icons/lu";

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const router = useRouter();
  
  const user = session?.user;
  const role = user?.role || "buyer";
  const pathname = usePathname();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

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
    <div className="flex flex-col h-full justify-between">
      <nav className="flex flex-col gap-2 p-4">
        {/* Logo and User Profile Section */}
        <div className="mb-6 flex flex-col gap-6 px-3">
          <Link href={'/'}><Logo /></Link>
          
          <div className="">
          <Link href={`/profile`} className="flex items-center gap-3 p-2 bg-default-100 rounded-xl" >
            <Avatar  name={user?.name || "U"} size="sm" >
              <Avatar.Image alt="User" src={user?.photo} />
               <Avatar.Fallback>{user?.name?.slice(0, 2).toUpperCase()}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold truncate">{user?.name || "User"}</span>
              <span className="text-[10px] text-default-500 uppercase">{role}</span>
            </div>
          </Link>
          </div>
        </div>

        {/* Navigation Items */}
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

      {/* Logout Button Pinned to Bottom */}
      <div className="p-4 border-t border-default-200 mx-auto w-[70%] ">
        <Button 
          variant="ghost" 
          className="w-full flex items-center text-center text-red-500 " 
          startContent={<LogOut size={18} />}
          onClick={handleLogout}
        >
         <LuCircleArrowOutDownLeft />  Logout
        </Button>
      </div>
    </div>
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
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
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