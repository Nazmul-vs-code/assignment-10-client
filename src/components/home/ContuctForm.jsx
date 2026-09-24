"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";

const ContuctForm = () => {
    return (
        <section className="w-full bg-black py-20 md:py-28">
            <div className="w-[97%] mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 md:mb-14"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                        Get in touch
                    </p>

                    <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                        Let&apos;s build something{" "}
                        <span className="text-red-500">great</span> together.
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                        Have a project, idea, or question? Send me a message and
                        let&apos;s talk about how we can make it happen.
                    </p>
                </motion.div>

                {/* Main glass area */}
                <div className="grid overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:grid-cols-[0.85fr_1.15fr]">

                    {/* Left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden border-b border-white/[0.08] p-7 md:p-10 lg:border-b-0 lg:border-r"
                    >
                        {/* Liquid reflections */}
                        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-600/[0.08] blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-yellow-500/[0.05] blur-3xl" />

                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div>
                                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10 text-red-400 shadow-[inset_0_1px_15px_rgba(255,255,255,0.05)]">
                                    <Mail size={25} />
                                </div>

                                <h3 className="text-2xl font-bold text-white md:text-3xl">
                                    Let&apos;s talk.
                                </h3>

                                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                                    Whether you&apos;re looking for a developer,
                                    have a business idea, or simply want to say
                                    hello, my inbox is always open.
                                </p>
                            </div>

                            <div className="mt-12 space-y-4">
                                <ContactInfo
                                    icon={<Mail size={19} />}
                                    title="Email"
                                    value="hello@example.com"
                                />

                                <ContactInfo
                                    icon={<Phone size={19} />}
                                    title="Phone"
                                    value="+880 1XXX-XXXXXX"
                                />

                                <ContactInfo
                                    icon={<MapPin size={19} />}
                                    title="Location"
                                    value="Bangladesh"
                                />
                            </div>

                            <div className="mt-12 flex items-center gap-2 text-sm font-medium text-zinc-500">
                                Available for new opportunities
                                <ArrowUpRight size={16} className="text-red-400" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative p-7 md:p-10"
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            <GlassInput
                                label="Your name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                            />

                            <GlassInput
                                label="Email address"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="mt-5">
                            <GlassInput
                                label="Subject"
                                name="subject"
                                type="text"
                                placeholder="I have a project idea..."
                            />
                        </div>

                        <div className="mt-5">
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-zinc-300"
                            >
                                Your message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={7}
                                placeholder="Tell me a little about your project..."
                                className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.035] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-zinc-600 focus:border-red-500/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(239,68,68,0.08)]"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 w-full justify-center gap-3 !border-red-500/30 !bg-red-500/10 !text-white hover:!bg-red-500/20 md:w-auto"
                        >
                            Send Message
                            <Send size={17} />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

const GlassInput = ({ label, name, type, placeholder }) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-zinc-300"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-5 py-4 text-sm text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-zinc-600 focus:border-red-500/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(239,68,68,0.08)]"
            />
        </div>
    );
};

const ContactInfo = ({ icon, title, value }) => {
    return (
        <motion.div
            whileHover={{ x: 5 }}
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 backdrop-blur-xl transition-colors duration-300 hover:border-red-500/20"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/15 bg-red-500/[0.08] text-red-400 transition-transform duration-300 group-hover:scale-105">
                {icon}
            </div>

            <div>
                <p className="text-xs uppercase tracking-wider text-zinc-600">
                    {title}
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-300">
                    {value}
                </p>
            </div>
        </motion.div>
    );
};

export default ContuctForm;