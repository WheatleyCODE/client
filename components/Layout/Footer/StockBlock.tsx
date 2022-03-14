import { FC } from 'react';
import { Button } from '@mui/material';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import { Width } from 'components';
import s from 'styles/components/Layout/Footer/StockBlock.module.scss';

export interface StockBlockProps {
  title: string;
}

export const StockBlock: FC<StockBlockProps> = ({ title }) => {
  return (
    <div className={s.mainBlock}>
      <Width>
        <div className={s.stock}>
          <div className={s.text}>
            <CardGiftcardOutlinedIcon />
            <h2 className={s.title}>{title}</h2>
          </div>
          <div className={s.buttonBlock}>
            <Button className={s.button} size="medium" variant="outlined">
              Подробнее
            </Button>
          </div>
        </div>
      </Width>
    </div>
  );
};
