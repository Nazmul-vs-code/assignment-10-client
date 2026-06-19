import { savePayment } from '@/lib/actions/payment';
import { getJwtToken } from '@/lib/api/getToken';
import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import SuccessUI from './SuccessUI';

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;
  const token = await getJwtToken();

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)');

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  });

  if (session.status === 'open') {
    return redirect('/');
  }

  if (session.status === 'complete') {
    // Keeping your exact DB logic
    const res = await savePayment({ ...session.metadata, sessionId: session_id }, token);
    
    // Pass the retrieved data to the UI component
    return <SuccessUI 
      customerEmail={session.customer_details.email} 
      orderData={session.metadata} 
      amount={session.amount_total / 100}
      date={new Date().toLocaleDateString()}
      transactionId={session.payment_intent.id}
    />;
  }
}