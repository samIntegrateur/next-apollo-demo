import React from 'react';
import classes from './Loader.module.css';

interface LoaderProps {}
const Loader: React.FC<LoaderProps> = (props) => {
  return <span className={classes.loader}>Loading...</span>;
};

export default Loader;
