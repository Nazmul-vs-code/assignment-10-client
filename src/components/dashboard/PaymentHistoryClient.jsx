"use client";

import React from 'react';
import { CheckCircle2, DollarSign, Clock, CreditCard } from "lucide-react";

export const PaymentHistoryClient = ({ payments }) => {
    if (!payments || payments.length === 0) {
        return <p className="text-zinc-500 text-center">No payment records found.</p>;
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4">
            {payments.map((payment) => (
                <div 
                    key={payment._id} 
                    className="flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-500">
                            <CreditCard size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-100">Product Payment</h3>
                            <p className="text-xs text-zinc-500 font-mono">ID: {payment.productId}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 text-sm">
                        <div className="flex items-center gap-2 text-zinc-400">
                            <Clock size={16} />
                            {new Date(payment.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center font-bold text-zinc-100">
                            <DollarSign size={16} className="text-emerald-500" />
                            {payment.priceId}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase">
                        <CheckCircle2 size={14} />
                        {payment.status}
                    </div>
                </div>
            ))}
        </div>
    );
};