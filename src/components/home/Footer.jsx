"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, ShieldCheck, ShoppingBag } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-zinc-400">
      {/* Red ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-red-700/5 blur-[100px]" />

      {/* Top red line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 transition-all duration-300 group-hover:border-red-500/50 group-hover:bg-red-500/15">
                <ShoppingBag className="h-5 w-5 text-red-500" />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  ReSell<span className="text-red-500"> Hub</span>
                </h2>
                <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                  Tech Marketplace
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500">
              A marketplace built for buying and selling tech products with
              secure authentication, trusted product management, and seamless
              payments.
            </p>

            {/* Security badge */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              Secure marketplace experience
            </div>
          </div>

          {/* Marketplace */}
          <div className="md:col-span-2">
            <h3 className="mb-5 text-sm font-semibold text-white">
              Marketplace
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/products"
                  className="transition-colors hover:text-red-500"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/wishlist"
                  className="transition-colors hover:text-red-500"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  href="/signin"
                  className="transition-colors hover:text-red-500"
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="transition-colors hover:text-red-500"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="md:col-span-2">
            <h3 className="mb-5 text-sm font-semibold text-white">
              Platform
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <span className="cursor-default transition-colors hover:text-red-500">
                  Buyer
                </span>
              </li>

              <li>
                <span className="cursor-default transition-colors hover:text-red-500">
                  Seller
                </span>
              </li>

              <li>
                <span className="cursor-default transition-colors hover:text-red-500">
                  Admin
                </span>
              </li>

              <li>
                <span className="cursor-default transition-colors hover:text-red-500">
                  Secure Payments
                </span>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-sm font-semibold text-white">
              Project
            </h3>

            <p className="mb-5 text-sm leading-6 text-zinc-500">
              Built with Next.js, Express.js, MongoDB, Better Auth, and Stripe.
            </p>

            <Link
              href="https://github.com/Nazmul-vs-code/assignment-10-client"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-red-500"
            >
              View Repository
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 flex flex-col gap-6 border-t border-zinc-900 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} nazmul-developer. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/Nazmul-vs-code"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-500"
            >
              <FaGithub className="h-4 w-4" />
            </Link>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-500"
            >
              <FaLinkedin className="h-4 w-4" />
            </Link>

            <Link
              href="mailto:"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-500"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;