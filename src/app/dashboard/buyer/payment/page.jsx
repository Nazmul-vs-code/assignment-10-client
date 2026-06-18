import { PaymentHistoryClient } from '@/components/dashboard/PaymentHistoryClient';
import { getJwtToken } from '@/lib/api/getToken';
import { getMyPayments } from '@/lib/api/payment';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const BuyerPaymentDetailsPage = async () => {

    const data = await getJwtToken()
    
    const paymentData = await getMyPayments(data)
    console.log(paymentData, '    + payment data ')

    return (
        <div className="min-h-screen bg-black p-8">
            <h1 className="text-3xl font-bold text-white mb-8">Payment History</h1>
            
            {/* Pass fetched data as a prop to the Client Component */}
            <PaymentHistoryClient payments={paymentData} />
        </div>
    );
};

export default BuyerPaymentDetailsPage;