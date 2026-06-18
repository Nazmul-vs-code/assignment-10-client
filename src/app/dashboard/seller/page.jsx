import { getJwtToken } from '@/lib/api/getToken';
import { getMyOrders } from '@/lib/api/myOrders';
import { getMyProducts } from '@/lib/api/products';
import SellerDashBoardStyle from '@/components/dashboard/SellerDashBoardStyle';

const SellerDashboardHomePage = async () => {
    const token = await getJwtToken();
    
    // Fetch data concurrently on the server
    const [myOrdersData, myProducts] = await Promise.all([
        getMyOrders(token),
        getMyProducts(token)
    ]);

    return (
        <SellerDashBoardStyle 
            myOrdersData={myOrdersData} 
            myProducts={myProducts} 
        />
    );
};

export default SellerDashboardHomePage;