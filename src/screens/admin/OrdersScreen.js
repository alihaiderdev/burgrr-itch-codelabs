import React from 'react';
import '../../styles/screens/admin/orders.css';

import AdminHeader from '../../components/admin/AdminHeader';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';

const OrdersScreen = () => {
  ScrollToTop();

  return (
    <>
      <AdminHeader />
      <div className='ordersScreen container-85'>OrdersScreen</div>
    </>
  );
};

export default OrdersScreen;
