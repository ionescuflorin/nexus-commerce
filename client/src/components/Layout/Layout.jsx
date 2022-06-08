import React from 'react';
import layoutStyles from './Layout.module.scss';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.Layout}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
