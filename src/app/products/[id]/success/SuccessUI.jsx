"use client";

import { motion } from "framer-motion";
import { CheckCircle, Receipt, Calendar, CreditCard, Package } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function SuccessUI({ customerEmail, orderData, amount, date, transactionId }) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl text-white"
      >
        <div className="flex flex-col items-center mb-8">
          <CheckCircle className="text-emerald-500 w-16 h-16 mb-4" />
          <h1 className="text-3xl font-bold">Payment Successful!</h1>
          <p className="text-neutral-400 mt-2">Confirmation sent to {customerEmail}</p>
        </div>

        <div className="bg-neutral-800/50 p-6 rounded-xl space-y-4">
          <div className="flex justify-between border-b border-neutral-700 pb-3">
            <span className="text-neutral-400 flex items-center gap-2"><Receipt size={16}/> Transaction ID</span>
            <span className="font-mono">{transactionId}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-700 pb-3">
            <span className="text-neutral-400 flex items-center gap-2"><Package size={16}/> Order ID</span>
            <span>{orderData?.orderId || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-700 pb-3">
            <span className="text-neutral-400 flex items-center gap-2"><CreditCard size={16}/> Amount Paid</span>
            <span className="font-bold text-emerald-400">${amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400 flex items-center gap-2"><Calendar size={16}/> Date</span>
            <span>{date}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
          <Button as={Link} href={`/orders/${orderData?.orderId}`} color="primary" variant="flat">
            View Details
          </Button>
          <Button as={Link} href="/my-orders" color="default" variant="bordered">
            My Orders
          </Button>
          <Button as={Link} href="/" color="danger" variant="solid">
            Continue Shopping
          </Button>
        </div>
      </motion.div>
    </div>
  );
}