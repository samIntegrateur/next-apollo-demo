import classnames from 'classnames';
import React from 'react';
import classes from './Container.module.css';

interface ContainerProps {
  paddingSmall?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  paddingSmall = false,
}) => {
  return (
    <div
      className={classnames('container', classes.container, {
        [classes.containerSmallPadding]: paddingSmall,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
