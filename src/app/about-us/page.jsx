'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    ShoppingBag,
    Store,
    UserRound,
    CreditCard,
    Heart,
    Search,
    BarChart3,
    LockKeyhole,
    PackageCheck,
    Zap,
    ArrowRight,
    CheckCircle2,
    Code2,
    Database,
    Server,
    Sparkles,
    Globe2,
} from 'lucide-react';

const AboutUsPage = () => {
    const roles = [
        {
            title: 'Buyers',
            description:
                'Discover tech products, search by category, save favorites to your wishlist, and purchase securely through Stripe.',
            icon: UserRound,
            color: 'text-[#f3d33b]',
            bg: 'bg-[#f3d33b]/10',
            border: 'border-[#f3d33b]/20',
        },
        {
            title: 'Sellers',
            description:
                'List and manage products, track incoming orders, and monitor marketplace performance from a dedicated dashboard.',
            icon: Store,
            color: 'text-[#e84a45]',
            bg: 'bg-[#e84a45]/10',
            border: 'border-[#e84a45]/20',
        },
        {
            title: 'Admins',
            description:
                'Manage users, review products, monitor transactions, and understand the platform through analytics.',
            icon: ShieldCheck,
            color: 'text-[#a3a3a0]',
            bg: 'bg-white/5',
            border: 'border-[#303030]',
        },
    ];

    const features = [
        {
            title: 'Secure Authentication',
            description:
                'Better Auth, Google OAuth, email/password authentication, and server-side JWT verification.',
            icon: LockKeyhole,
        },
        {
            title: 'Product Approval',
            description:
                'Seller products go through an admin review process before becoming available in the marketplace.',
            icon: PackageCheck,
        },
        {
            title: 'Secure Payments',
            description:
                'Stripe powers product purchases and Pro subscription payments.',
            icon: CreditCard,
        },
        {
            title: 'Smart Discovery',
            description:
                'Search products, filter by category, paginate results, and save products to a wishlist.',
            icon: Search,
        },
        {
            title: 'Powerful Dashboards',
            description:
                'Dedicated experiences for buyers, sellers, and administrators with role-specific tools.',
            icon: BarChart3,
        },
        {
            title: 'Responsive Experience',
            description:
                'A mobile-first interface designed to work smoothly across different screen sizes.',
            icon: Globe2,
        },
    ];

    const technologies = [
        {
            name: 'Next.js 15',
            description: 'Frontend & App Router',
            icon: Code2,
        },
        {
            name: 'Express.js',
            description: 'Backend API',
            icon: Server,
        },
        {
            name: 'MongoDB',
            description: 'Database',
            icon: Database,
        },
        {
            name: 'Stripe',
            description: 'Payments',
            icon: CreditCard,
        },
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#111111] text-[#f5f5f2]">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative flex min-h-[min(760px,85vh)] items-center justify-center px-5 py-20 sm:px-8 sm:py-24">

                {/* Background effects */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#e84a45]/[0.06] blur-3xl" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                    className="relative z-10 mx-auto w-full max-w-6xl text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e84a45]/25 bg-[#e84a45]/10 px-4 py-2 text-sm font-medium text-[#f07872]"
                    >
                        <Sparkles size={15} />
                        The modern tech marketplace
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl font-bold tracking-[-0.05em] sm:text-6xl md:text-7xl"
                    >
                        Buy. Sell.
                        <span className="block text-[#e84a45]">
                            ReSell.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#a3a3a0] sm:text-lg"
                    >
                        ReSell Hub is a modern, secure marketplace built for
                        buying and selling tech products with confidence,
                        simplicity, and powerful tools for every type of user.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-9 flex flex-wrap justify-center gap-3"
                    >
                        <div className="rounded-xl border border-[#303030] bg-[#181818] px-5 py-3 text-sm text-[#a3a3a0]">
                            <span className="font-bold text-[#f5f5f2]">3</span>{' '}
                            User Roles
                        </div>

                        <div className="rounded-xl border border-[#303030] bg-[#181818] px-5 py-3 text-sm text-[#a3a3a0]">
                            <span className="font-bold text-[#f5f5f2]">
                                Secure
                            </span>{' '}
                            Payments
                        </div>

                        <div className="rounded-xl border border-[#303030] bg-[#181818] px-5 py-3 text-sm text-[#a3a3a0]">
                            <span className="font-bold text-[#f5f5f2]">
                                Full-Stack
                            </span>{' '}
                            Architecture
                        </div>
                    </motion.div>
                </motion.div>
            </section>


            {/* =====================================================
                INTRO / MISSION
            ====================================================== */}
            <section className="relative border-t border-[#303030] px-5 py-20 sm:px-8 sm:py-24">

                <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#e84a45]">
                            Why ReSell Hub?
                        </p>

                        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                            A marketplace designed around{' '}
                            <span className="text-[#e84a45]">
                                trust and simplicity.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl leading-8 text-[#a3a3a0]">
                            ReSell Hub brings buyers, sellers, and
                            administrators into one connected marketplace.
                            Sellers get the tools they need to manage their
                            products and orders, buyers get a streamlined
                            shopping experience, and administrators maintain
                            control over the platform.
                        </p>

                        <p className="mt-4 max-w-xl leading-8 text-[#a3a3a0]">
                            Every part of the platform is designed around
                            clear permissions, secure authentication, product
                            moderation, and a smooth purchasing experience.
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl border border-[#303030] bg-[#181818] p-6 sm:p-8">

                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#e84a45]/20 bg-[#e84a45]/10">
                                    <Zap className="text-[#e84a45]" />
                                </div>

                                <div>
                                    <h3 className="font-bold">
                                        Built for the marketplace
                                    </h3>

                                    <p className="text-sm text-[#a3a3a0]">
                                        One platform. Multiple experiences.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    'Role-based access control',
                                    'Secure Stripe payments',
                                    'Admin product approval',
                                    'Dedicated dashboards',
                                    'Wishlist & product discovery',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-[#a3a3a0]"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="shrink-0 text-[#f3d33b]"
                                        />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* =====================================================
                HOW IT WORKS / ROLES
            ====================================================== */}
            <section className="relative border-t border-[#303030] px-5 py-20 sm:px-8 sm:py-24">

                <div className="mx-auto w-full max-w-6xl">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-12 max-w-2xl text-center"
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#e84a45]">
                            One ecosystem
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Everyone has a role.
                        </h2>

                        <p className="mt-4 text-[#a3a3a0]">
                            ReSell Hub provides dedicated experiences and
                            permissions for every type of user.
                        </p>
                    </motion.div>


                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid items-stretch gap-4 md:grid-cols-3 md:gap-5"
                    >
                        {roles.map((role) => {
                            const Icon = role.icon;

                            return (
                                <motion.div
                                    key={role.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -7 }}
                                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${role.border} bg-[#181818] p-6 transition-colors duration-200 hover:border-[#494949]`}
                                >
                                    <div
                                        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${role.bg} opacity-40 blur-3xl transition-transform duration-500 group-hover:scale-125`}
                                    />

                                    <div
                                        className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${role.bg}`}
                                    >
                                        <Icon className={role.color} />
                                    </div>

                                    <h3 className="relative text-xl font-bold">
                                        {role.title}
                                    </h3>

                                    <p className="relative mt-3 flex-1 text-sm leading-7 text-[#a3a3a0]">
                                        {role.description}
                                    </p>

                                    <ArrowRight
                                        className={`mt-6 ${role.color} opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100`}
                                        size={18}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>


            {/* =====================================================
                FEATURES
            ====================================================== */}
            <section className="relative border-t border-[#303030] px-5 py-20 sm:px-8 sm:py-24">

                <div className="mx-auto w-full max-w-6xl">

                    <div className="mb-12 max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#e84a45]"
                        >
                            What powers the experience
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            Everything you need in one marketplace.
                        </motion.h2>
                    </div>


                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.title}
                                    variants={itemVariants}
                                    className="group h-full rounded-2xl border border-[#303030] bg-[#181818] p-6 transition-colors duration-200 hover:border-[#494949] hover:bg-[#202020]"
                                >
                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#303030] bg-[#202020] transition-colors duration-200 group-hover:border-[#e84a45]/30 group-hover:bg-[#e84a45]/10">
                                        <Icon
                                            size={20}
                                            className="text-[#a3a3a0] transition-colors group-hover:text-[#e84a45]"
                                        />
                                    </div>

                                    <h3 className="font-bold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#a3a3a0]">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>


            {/* =====================================================
                SECURITY
            ====================================================== */}
            <section className="relative border-t border-[#303030] px-5 py-20 sm:px-8 sm:py-24">

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-[#303030] bg-[#181818] p-6 sm:p-10 lg:p-12"
                >
                    <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#e84a45]/[0.05] blur-3xl" />

                    <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

                        <div>
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e84a45]/20 bg-[#e84a45]/10">
                                <ShieldCheck className="text-[#e84a45]" size={27} />
                            </div>

                            <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
                                Security is part of the foundation.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-[#a3a3a0]">
                                ReSell Hub uses server-side authentication,
                                JWT verification, protected routes, restricted
                                CORS configuration, and environment variables
                                for sensitive configuration.
                            </p>
                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                'Better Auth',
                                'JWT Verification',
                                'Role-Based Access',
                                'Protected Routes',
                                'Restricted CORS',
                                'Environment Secrets',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-xl border border-[#303030] bg-[#202020] p-4 text-sm text-[#a3a3a0]"
                                >
                                    <LockKeyhole
                                        size={16}
                                        className="shrink-0 text-[#e84a45]"
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>
                </motion.div>
            </section>


            {/* =====================================================
                TECHNOLOGY
            ====================================================== */}
            <section className="border-t border-[#303030] px-5 py-20 sm:px-8 sm:py-24">

                <div className="mx-auto w-full max-w-6xl">

                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#e84a45]">
                            Under the hood
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Built with modern technology.
                        </h2>
                    </div>


                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-4"
                    >
                        {technologies.map((tech) => {
                            const Icon = tech.icon;

                            return (
                                <motion.div
                                    key={tech.name}
                                    variants={itemVariants}
                                    whileHover={{ y: -4 }}
                                    className="h-full rounded-2xl border border-[#303030] bg-[#181818] p-4 text-center sm:p-5"
                                >
                                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#202020] text-[#a3a3a0]">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="text-sm font-bold">
                                        {tech.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-[#a3a3a0]">
                                        {tech.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>


            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="relative border-t border-[#303030] px-5 pb-20 pt-16 sm:px-8 sm:pb-24">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#303030] bg-[#181818] px-6 py-12 text-center sm:px-12 sm:py-16"
                >
                    <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-[#e84a45]/[0.06] blur-3xl" />

                    <div className="relative">
                        <ShoppingBag
                            className="mx-auto mb-5 text-[#e84a45]"
                            size={30}
                        />

                        <h2 className="text-3xl font-black sm:text-4xl">
                            Ready to explore ReSell Hub?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#a3a3a0] sm:text-base">
                            Discover products, connect buyers and sellers, and
                            experience a marketplace built around security,
                            simplicity, and modern technology.
                        </p>

                        <motion.a
                            href="/products"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#e84a45] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d83d38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3d33b]"
                        >
                            Explore Products
                            <ArrowRight size={17} />
                        </motion.a>
                    </div>
                </motion.div>
            </section>

        </main>
    );
};

export default AboutUsPage;