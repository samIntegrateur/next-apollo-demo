import React from 'react';
import Container from '../Container/Container';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Container paddingSmall>
        <h1 className={classes.header__title}>Next Apollo Demo</h1>
      </Container>
    </header>
  );
};

export default Header;
