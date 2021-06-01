import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import '../../styles/screens/store/error404.css';
import { ScrollToTop } from '../../utilities/ReuseableFunctions';

const Error404Screen = ({ match, history, location }) => {
  ScrollToTop();

  console.log('{ match, history, location } : ', { match, history, location });
  console.log('location.pathname : ', location.pathname.split('/'));
  return (
    <>
      <AdminHeader />
      <div className='error404Screen conatiner-85'>
        <h1>404 - ({location.pathname}) - page not found</h1>
      </div>
    </>
  );
};

export default Error404Screen;
