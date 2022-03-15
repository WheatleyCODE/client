import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { subHeaderMenu } from 'consts';
import { CSSTransition } from 'react-transition-group';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { Width } from 'components';
import { ButtonRC } from 'components/UI';
import { useActions } from 'hooks';
import logo from 'public/logo.png';
import s from 'styles/components/Layout/Header/SubHeader.module.scss';

export const SubHeader: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { toggleMiniCart } = useActions();

  useEffect(() => {
    const element = document.querySelector(`.${s.mainBlock}`);

    if (element !== null) {
      const observer = new IntersectionObserver(
        ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
        { threshold: [1] }
      );

      const muObserver = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          setIsActive((p) => !p);
        });
      });

      const config = { attributes: true, childList: false, characterData: false };

      observer.observe(element);
      muObserver.observe(element, config);
    }
  }, []);

  return (
    <div className={s.mainBlock}>
      <Width>
        <div className={s.subHeader}>
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={isActive}
            timeout={200}
            classNames="showMiniLogo"
          >
            <div className={s.miniLogo}>
              <Image className={s.logoImg} height={35} width={35} src={logo} alt={'logo'} />
            </div>
          </CSSTransition>
          <nav className={isActive ? `${s.menu} ${s.show}` : `${s.menu} ${s.close}`}>
            <ul className={s.ul}>
              {subHeaderMenu.map((itm) => (
                <li key={itm.path}>
                  <h4>{itm.name}</h4>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.cart}>
            <ButtonRC
              onClick={() => toggleMiniCart()}
              className={s.button}
              color="orange"
              style="rounded"
            >
              <div className={s.buttonText}>
                <div className={s.content}>
                  <h4>Корзина</h4>
                  <ArrowRightAltRoundedIcon className={s.icon} />
                </div>
              </div>
            </ButtonRC>
          </div>
        </div>
      </Width>
    </div>
  );
};
