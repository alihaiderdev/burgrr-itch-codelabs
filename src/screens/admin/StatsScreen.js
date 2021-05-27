import React from 'react';
import '../../styles/screens/admin/stats.css';

import AdminHeader from '../../components/admin/AdminHeader';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';

const StatsScreen = () => {
  ScrollToTop();

  return (
    <>
      <AdminHeader />
      <div className='statsScreen container-85'>StatsScreen</div>
    </>
  );
};

export default StatsScreen;
