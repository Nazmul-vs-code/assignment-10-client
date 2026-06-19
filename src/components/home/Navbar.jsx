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
    <nav className="sticky top-0 z-40 w-full border-b border-red-900/30 bg-black/80 backdrop-blur-md">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo and Mobile Trigger */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
          <Link href={'/'}><Logo /></Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-neutral-300">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-medium hover:text-red-500 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/signin" className="font-medium text-neutral-300 hover:text-white">Login</Link>
              <Link href="/signup"><Button size="sm" className="bg-red-600 text-white hover:bg-red-700">Sign Up</Button></Link>
            </>
          ) : (
            <Dropdown>
              <Dropdown.Trigger>
                <div className="cursor-pointer ring-2 ring-red-900 rounded-full">
                  <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.photo} />
                    <Avatar.Fallback>{user?.name?.charAt(0) || 'U'}</Avatar.Fallback>
                  </Avatar>
                </div>
              </Dropdown.Trigger>
              <Dropdown.Popover className="bg-zinc-950 border border-red-900/50">
                {/* User Info Header in Dropdown */}
                <div className="p-3 border-b border-red-900/30 flex flex-col gap-1">
                  <span className="text-sm font-semibold text-white">{user?.name}</span>
                  <span className="text-xs text-neutral-400">{user?.email}</span>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="dashboard">
                    <Link href={`/dashboard/${user?.role}`} className="flex items-center gap-2 text-neutral-200">
                      <MdDashboard className="text-red-500" /> Dashboard
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="profile" className="text-neutral-200">
                    <Link href="/profile" className="flex items-center gap-2">
                      <CgProfile className="text-red-500" /> Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="logout" variant="danger" onClick={() => authClient.signOut()}>
                    <BiLogOut /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-red-900/30 bg-zinc-950 p-4 flex flex-col gap-2 text-white">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="p-3 hover:bg-red-950/30 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          {user && (
            <div className="border-t border-red-900/30 pt-4 mt-2">
              <div className="px-3 mb-4">
                <p className="text-sm font-bold">{user?.name}</p>
                <p className="text-xs text-neutral-400">{user?.email}</p>
              </div>
              <Link href={`/dashboard/${user?.role}`} className="block p-3 hover:bg-red-950/30 rounded-lg">Dashboard</Link>
              <Link href="/profile" className="block p-3 hover:bg-red-950/30 rounded-lg">Profile</Link>
              <Button variant="danger" onClick={() => authClient.signOut()} className="w-full mt-2 bg-red-600">Logout</Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;