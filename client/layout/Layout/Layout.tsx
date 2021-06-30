import React from 'react';
import classes from './Layout.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface LayoutProps {}
const Layout: React.FC<LayoutProps> = (props) => (
  <div className={classes.layout}>
    <Header />
    <main role='main' className={classes.layout__main}>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;
