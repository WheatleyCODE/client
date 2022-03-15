import { Button } from '@mui/material';
import { FC, MouseEvent } from 'react';
import s from 'styles/components/UI/ButtonRC.module.scss';

export interface ButtonRCProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  style: 'rounded' | 'default';
  color?: 'white' | 'orange';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonRC: FC<ButtonRCProps> = (props) => {
  const {
    className,
    children,
    size = 'medium',
    variant = 'outlined',
    style,
    color = 'white',
    onClick,
  } = props;

  return (
    <Button
      onClick={onClick}
      size={size}
      variant={variant}
      className={`${s.buttonRC} ${s[style]} ${s[color]} ${className}`}
    >
      {children}
    </Button>
  );
};
