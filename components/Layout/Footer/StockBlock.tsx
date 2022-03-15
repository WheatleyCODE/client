import { FC } from 'react';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import { Width } from 'components';
import { ButtonRC } from 'components/UI';
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
            <ButtonRC color="white" style="rounded" className={s.button}>
              <h4>Подробнее</h4>
            </ButtonRC>
          </div>
        </div>
      </Width>
    </div>
  );
};
