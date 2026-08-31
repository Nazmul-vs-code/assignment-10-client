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
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
        },
        {
            title: 'Sellers',
            description:
                'List and manage products, track incoming orders, and monitor marketplace performance from a dedicated dashboard.',
            icon: Store,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20',
        },
        {
            title: 'Admins',
            description:
                'Manage users, review products, monitor transactions, and understand the platform through analytics.',
            icon: ShieldCheck,
            color: 'text-red-400',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
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
        <main className="min-h-screen overflow-hidden bg-black text-white">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative flex min-h-[85vh] items-center justify-center px-5 py-24 sm:px-8">

                {/* Background effects */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]"
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={containerVariants}
                    className="relative z-10 mx-auto max-w-5xl text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm text-red-400 backdrop-blur-xl"
                    >
                        <Sparkles size={15} />
                        The modern tech marketplace
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl"
                    >
                        Buy. Sell.
                        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                            ReSell.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
                    >
                        ReSell Hub is a modern, secure marketplace built for
                        buying and selling tech products with confidence,
                        simplicity, and powerful tools for every type of user.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-9 flex flex-wrap justify-center gap-3"
                    >
                        <div className="rounded-xl border border-zinc-800 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl">
                            <span className="font-bold text-white">3</span>{' '}
                            User Roles
                        </div>

                        <div className="rounded-xl border border-zinc-800 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl">
                            <span className="font-bold text-white">
                                Secure
                            </span>{' '}
                            Payments
                        </div>

                        <div className="rounded-xl border border-zinc-800 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl">
                            <span className="font-bold text-white">
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
            <section className="relative px-5 py-24 sm:px-8">

                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                            Why ReSell Hub?
                        </p>

                        <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                            A marketplace designed around{' '}
                            <span className="text-red-500">
                                trust and simplicity.
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-zinc-400">
                            ReSell Hub brings buyers, sellers, and
                            administrators into one connected marketplace.
                            Sellers get the tools they need to manage their
                            products and orders, buyers get a streamlined
                            shopping experience, and administrators maintain
                            control over the platform.
                        </p>

                        <p className="mt-4 leading-8 text-zinc-500">
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
                        <div className="absolute -inset-4 rounded-3xl bg-red-600/5 blur-2xl" />

                        <div className="relative rounded-3xl border border-zinc-800/80 bg-zinc-950/70 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">

                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                                    <Zap className="text-red-400" />
                                </div>

                                <div>
                                    <h3 className="font-bold">
                                        Built for the marketplace
                                    </h3>

                                    <p className="text-sm text-zinc-600">
                                        One platform. Multiple experiences.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {[
                                    'Role-based access control',
                                    'Secure Stripe payments',
                                    'Admin product approval',
                                    'Dedicated dashboards',
                                    'Wishlist & product discovery',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-zinc-400"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="shrink-0 text-emerald-400"
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
            <section className="relative px-5 py-24 sm:px-8">

                <div className="mx-auto max-w-6xl">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-12 max-w-2xl text-center"
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                            One ecosystem
                        </p>

                        <h2 className="text-3xl font-black sm:text-4xl">
                            Everyone has a role.
                        </h2>

                        <p className="mt-4 text-zinc-500">
                            ReSell Hub provides dedicated experiences and
                            permissions for every type of user.
                        </p>
                    </motion.div>


                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid gap-5 md:grid-cols-3"
                    >
                        {roles.map((role) => {
                            const Icon = role.icon;

                            return (
                                <motion.div
                                    key={role.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -7 }}
                                    className={`group relative overflow-hidden rounded-2xl border ${role.border} bg-zinc-950/60 p-6 backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl`}
                                >
                                    <div
                                        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${role.bg} opacity-60 blur-3xl transition-transform duration-500 group-hover:scale-150`}
                                    />

                                    <div
                                        className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${role.bg}`}
                                    >
                                        <Icon className={role.color} />
                                    </div>

                                    <h3 className="relative text-xl font-bold">
                                        {role.title}
                                    </h3>

                                    <p className="relative mt-3 text-sm leading-7 text-zinc-500">
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
            <section className="relative px-5 py-24 sm:px-8">

                <div className="mx-auto max-w-6xl">

                    <div className="mb-12 max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500"
                        >
                            What powers the experience
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-black sm:text-4xl"
                        >
                            Everything you need in one marketplace.
                        </motion.h2>
                    </div>


                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.title}
                                    variants={itemVariants}
                                    className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60"
                                >
                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-white/[0.03] transition-colors duration-300 group-hover:border-red-500/20 group-hover:bg-red-500/10">
                                        <Icon
                                            size={20}
                                            className="text-zinc-400 transition-colors group-hover:text-red-400"
                                        />
                                    </div>

                                    <h3 className="font-bold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-zinc-500">
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
            <section className="relative px-5 py-24 sm:px-8">

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-red-500/10 bg-zinc-950/70 p-7 shadow-2xl backdrop-blur-2xl sm:p-12"
                >
                    <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-red-600/5 blur-[100px]" />

                    <div className="relative grid items-center gap-10 lg:grid-cols-2">

                        <div>
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                                <ShieldCheck className="text-red-400" size={27} />
                            </div>

                            <h2 className="text-3xl font-black sm:text-4xl">
                                Security is part of the foundation.
                            </h2>

                            <p className="mt-5 leading-7 text-zinc-500">
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
                                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-white/[0.02] p-4 text-sm text-zinc-400"
                                >
                                    <LockKeyhole
                                        size={16}
                                        className="shrink-0 text-red-400"
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
            <section className="px-5 py-24 sm:px-8">

                <div className="mx-auto max-w-6xl">

                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                            Under the hood
                        </p>

                        <h2 className="text-3xl font-black sm:text-4xl">
                            Built with modern technology.
                        </h2>
                    </div>


                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
                    >
                        {technologies.map((tech) => {
                            const Icon = tech.icon;

                            return (
                                <motion.div
                                    key={tech.name}
                                    variants={itemVariants}
                                    whileHover={{ y: -4 }}
                                    className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 text-center backdrop-blur-xl"
                                >
                                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.03] text-zinc-400">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="text-sm font-bold">
                                        {tech.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-zinc-600">
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
            <section className="relative px-5 pb-24 pt-12 sm:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 px-6 py-16 text-center shadow-2xl backdrop-blur-xl sm:px-12"
                >
                    <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-[90px]" />

                    <div className="relative">
                        <ShoppingBag
                            className="mx-auto mb-5 text-red-400"
                            size={30}
                        />

                        <h2 className="text-3xl font-black sm:text-4xl">
                            Ready to explore ReSell Hub?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                            Discover products, connect buyers and sellers, and
                            experience a marketplace built around security,
                            simplicity, and modern technology.
                        </p>

                        <motion.a
                            href="/products"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition-colors hover:bg-red-500"
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