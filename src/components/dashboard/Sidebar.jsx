"use client";

import { authClient } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { ChartArea, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMoney } from "react-icons/bi";
import { TbAsset } from "react-icons/tb";

export default function DashboardSidebar() {
  const { data: session } = authClient.useSession();
  const role = session?.user?.role || "buyer";
  const pathname = usePathname();

  const dashboardItems = {
    seller: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/seller" },
      { icon: TbAsset, label: "Products", link: "/dashboard/seller/products" },
      { icon: BiMoney, label: "Transaction", link: "/dashboard/seller/transaction" },
    ],
    buyer: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/buyer" },
      { icon: TbAsset, label: "Products", link: "/dashboard/buyer/products" },
      { icon: BiMoney, label: "Transaction", link: "/dashboard/buyer/transaction" },
    ],
    admin: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/admin" },
      { icon: User2, label: "User Manage", link: "/dashboard/admin/users" },
      { icon: BiMoney, label: "Transaction", link: "/dashboard/admin/transaction" },
    ],
  };

  const navItems = dashboardItems[role] || dashboardItems.buyer;

  const NavContent = () => (
    <nav className="flex flex-col gap-2 p-4">
      <div className="mb-6 px-3">
        <h1 className="text-2xl font-extrabold text-primary tracking-tight"><Link href={'/'}> techBazar</Link></h1>
      </div>
      {navItems.map((item) => {
        // DYNAMIC LOGIC:
        // 1. If it's an overview link, it's only active if the path matches EXACTLY.
        // 2. Otherwise, it's active if the current path starts with that link.
        const isOverview = item.label === "Overview";
        const isActive = isOverview 
          ? pathname === item.link 
          : pathname.startsWith(item.link);

        return (
          <Link key={item.label} href={item.link}>
            <Button
              variant="ghost"
              className={`w-full justify-start rounded-none transition-colors ${
                isActive 
                  ? "bg-neutral-800 text-white hover:bg-neutral-900" 
                  : "text-foreground hover:bg-default-200"
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
      <aside className="hidden lg:block w-64 border-r border-default-200 h-screen bg-content1 shadow-sm">
        <NavContent />
      </aside>

      <div className="lg:hidden p-4">
        <Drawer>
          <Drawer.Trigger asChild>
            <Button variant="flat"><Bars /> Menu</Button>
          </Drawer.Trigger>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Body><NavContent /></Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}