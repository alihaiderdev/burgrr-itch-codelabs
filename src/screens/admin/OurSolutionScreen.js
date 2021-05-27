import React from 'react';
import '../../styles/screens/admin/ourSolution.css';

import AdminHeader from '../../components/admin/AdminHeader';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';

const OurSolutionScreen = () => {
  ScrollToTop();

  return (
    <>
      <AdminHeader />
      <div className='ourSolutionScreen container-85 container-y center'>
        OurSolutionScreen
      </div>
    </>
  );
};

export default OurSolutionScreen;
