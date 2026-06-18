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

  if (pathName?.includes('/dashboard')) return null;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/80 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5"><span className="block h-0.5 w-6 bg-current" /><span className="block h-0.5 w-6 bg-current" /></div>
          </button>
          <Link href={'/'}><Logo /></Link>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}><Link href={link.href} className="font-medium hover:text-indigo-600">{link.name}</Link></li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/signin">Login</Link>
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
                    <Link href={`/dashboard/${user?.role}`} className="flex items-center gap-2"><MdDashboard /> Dashboard</Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="profile"><CgProfile /> Profile</Dropdown.Item>
                  <Dropdown.Item id="logout" variant="danger" onClick={() => authClient.signOut()}><BiLogOut /> Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;