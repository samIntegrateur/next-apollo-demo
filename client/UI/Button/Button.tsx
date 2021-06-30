import React from 'react';
import classes from './Button.module.css';
import classnames from 'classnames';

interface ButtonProps {
  buttonType?: 'button' | 'submit';
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
  fullOnSm?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonType = 'button',
  onClickAction,
  fullOnSm = false,
  children,
}) => {
  return (
    <button
      type={buttonType}
      onClick={onClickAction}
      className={classnames(classes.button, {
        [classes.buttonFullOnSm]: fullOnSm,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
