import { FC } from 'react';
import Image from 'next/image';
import viber from 'public/viber.svg';
import telegram from 'public/telegram.svg';
import whatsapp from 'public/whatsapp.svg';
import s from 'styles/components/UI/Messengers.module.scss';

interface MessengersProps {
  width: string;
  height: string;
  className?: string;
}

export const Messengers: FC<MessengersProps> = ({ width, height, className }) => {
  const messengers = [
    {
      id: 1,
      name: 'telegram',
      img: telegram,
      link: '/',
    },
    {
      id: 2,
      name: 'viber',
      img: viber,
      link: '/',
    },
    {
      id: 3,
      name: 'whatsapp',
      img: whatsapp,
      link: '/',
    },
  ];

  return (
    <ul className={s.messengers}>
      {messengers.map(({ name, id, img, link }) => (
        <li className={className} key={id}>
          <a target="_blank" href={link} rel="noreferrer">
            <Image width={width} height={height} src={img} alt={name} />
          </a>
        </li>
      ))}
    </ul>
  );
};
