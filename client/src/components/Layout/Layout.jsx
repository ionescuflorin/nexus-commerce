import React from 'react';
import layoutStyles from './Layout.module.scss';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.Layout}>
      <NavBar />
      <main className={layoutStyles.Main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
