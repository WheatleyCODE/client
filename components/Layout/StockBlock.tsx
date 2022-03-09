import { Button } from '@mui/material';
import { Width } from 'components';
import { FC } from 'react';
import s from 'styles/components/Layout/StockBlock.module.scss';

export interface StockBlockProps {
  title: string;
}

export const StockBlock: FC<StockBlockProps> = ({ title }) => {
  return (
    <div className={s.mainBlock}>
      <Width>
        <div className={s.stock}>
          <div className={s.text}>
            <i className="fas fa-times" />
            <h2 className={s.title}>{title}</h2>
          </div>
          <div className={s.buttonBlock}>
            <Button className={s.button} size="large" variant="outlined">
              Учавствовать
            </Button>
          </div>
        </div>
      </Width>
    </div>
  );
};
