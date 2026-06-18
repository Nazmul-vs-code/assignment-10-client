"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import Logo from "./Logo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathName = usePathname();

  // Hide Navbar on dashboard pages
  if (pathName?.includes('/dashboard')) return null;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/80 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo and Mobile Trigger */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
          <Link href={'/'}><Logo /></Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-medium hover:text-indigo-600 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth / Profile */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/signin" className="font-medium">Login</Link>
              <Link href="/signup"><Button size="sm">Sign Up</Button></Link>
            </>
          ) : (
            <Dropdown>
              <Dropdown.Trigger>
                <Avatar size="sm" className="cursor-pointer">
                  <Avatar.Image src={user?.photo} referrerPolicy="no-referrer" />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="p-3 border-b flex items-center gap-3">
                  <Avatar size="sm"><Avatar.Image src={user?.photo} referrerPolicy="no-referrer" /></Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{user?.name}</span>
                    <span className="text-xs text-muted-foreground">{user?.email}</span>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="dashboard">
                    <Link href={`/dashboard/${user?.role}`} className="flex items-center gap-2">
                      <MdDashboard /> Dashboard
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="profile"><CgProfile /> Profile</Dropdown.Item>
                  <Dropdown.Item id="logout" variant="danger" onClick={() => authClient.signOut()}>
                    <BiLogOut /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </div>
      </header>

      {/* Mobile Menu (Visible only on small screens) */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-separator bg-background p-4 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block font-medium p-3 hover:bg-zinc-800 rounded-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="border-t pt-4">
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link href="/signin" className="p-3">Login</Link>
                <Link href="/signup"><Button className="w-full">Sign Up</Button></Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-3">
                  <Avatar size="sm">
                    <Avatar.Image src={user?.photo} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{user?.name}</span>
                    <span className="text-xs text-muted-foreground">{user?.email}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link 
                    href={`/dashboard/${user?.role}`} 
                    className="flex items-center gap-2 p-3 hover:bg-zinc-800 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MdDashboard /> Dashboard
                  </Link>
                  <Link 
                    href={`/profile`} 
                    className="flex items-center gap-2 p-3 hover:bg-zinc-800 rounded-lg"
                    
                  >
                    <CgProfile /> profile
                  </Link>
                  <Button variant="danger" onClick={() => authClient.signOut()} className="w-full justify-start">
                    <BiLogOut /> Logout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;