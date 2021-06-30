import React from 'react';
import Container from '../Container/Container';
import classes from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Container paddingSmall>
        <p>© Samuel Desbos - 2021</p>
      </Container>
    </footer>
  );
};

export default Footer;
