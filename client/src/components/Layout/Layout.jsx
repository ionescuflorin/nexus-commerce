import React from 'react';
import layoutStyles from './Layout.module.scss';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import NavOffer from '../NavOffer/NavOffer';

const Layout = ({ children }) => {
  return (
    <div className={`${layoutStyles.Layout} container`}>
      <NavOffer />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
