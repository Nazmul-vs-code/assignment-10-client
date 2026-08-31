import { SellerProductFormModal } from '@/components/dashboard/SellerProductFormModal';
import AnimatedContainer from '@/components/dashboard/AnimatedContainer';
import { getUserSession } from '@/lib/api/session';

const SellerProductsPage = async () => {
    const user = await getUserSession();

    return (
        <div className="relative flex min-h-full items-center justify-center overflow-hidden p-5 sm:p-8">

            {/* Soft background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/5 blur-3xl" />

            <AnimatedContainer>
                {/* Header */}
                <div className="mb-7 text-center">
                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Create Product
                    </h1>

                    <p className="mt-2 text-sm text-zinc-500 sm:text-base">
                        Add a new item to your store inventory
                    </p>
                </div>

                {/* Glass Form */}
                <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                    <SellerProductFormModal user={user} />
                </div>

                {/* Helper text */}
                <p className="mt-5 text-center text-xs text-zinc-600">
                    Make sure all product details are correct before saving.
                </p>
            </AnimatedContainer>
        </div>
    );
};

export default SellerProductsPage;