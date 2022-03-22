import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import { Link, animateScroll } from 'react-scroll';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { useActions, useTypedSelector } from 'hooks';
import { Width } from 'components';
import { ButtonRC } from 'components/UI';
import { subHeaderMenu } from 'consts';
import logo from 'public/logo.png';
import s from 'styles/components/Layout/Header/SubHeader.module.scss';

interface ObjectWidth {
  [key: number]: number;
}

const LOGO_WIDTH = 55;
const MARGIN_RIGHT = 5;
const DEFAULT_STEP = 0;

export const SubHeader: FC = () => {
  const [objectWidth, setObjectWidth] = useState<ObjectWidth>({});
  const [isActive, setIsActive] = useState(false);

  const [currentStep, setCurrentStep] = useState(DEFAULT_STEP);
  const [skipSteps, setSkipSteps] = useState(DEFAULT_STEP);
  const prevStep = useRef(DEFAULT_STEP);

  const { toggleMiniCart, toggleMainMenuDesctop } = useActions();
  const { showMainMenuDesctop } = useTypedSelector((state) => state.modals);

  const mainDivElement = useRef<HTMLDivElement>(null);
  const ulElement = useRef<HTMLUListElement>(null);

  useEffect(() => {
    prevStep.current = currentStep;
  }, [currentStep]);

  useEffect(() => {
    const element = document.querySelector(`.${s.mainBlock}`);

    if (!element) return;

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
  }, []);

  useEffect(() => {
    const newObjectWidth: ObjectWidth = {};

    if (!ulElement.current) return;

    ulElement.current.childNodes.forEach((el, i) => {
      const elem = el as Element;

      newObjectWidth[i] = elem.clientWidth;
    });

    setObjectWidth({ ...newObjectWidth });
  }, []);

  const scroll = (i: number) => {
    if (!mainDivElement.current) return;

    let width = 0;

    if (i === 0) {
      mainDivElement.current.scrollTo(0, 0);
      return;
    }

    for (let x = 0; x !== i; x++) {
      width += objectWidth[x] + MARGIN_RIGHT;
    }

    mainDivElement.current.scrollTo(width + LOGO_WIDTH, 0);
  };

  const checkStep = (currStep: number) => {
    const preStep = prevStep.current;

    if (preStep < currStep && currStep - preStep > 1) {
      setSkipSteps(currStep - preStep - 1);
    } else if (preStep > currStep && preStep - currStep > 1) {
      setSkipSteps(preStep - currStep - 1);
    }
  };

  const onClickHandlerNavLink = (i: number) => {
    if (showMainMenuDesctop) toggleMainMenuDesctop();

    checkStep(i);
    setCurrentStep(i);
  };

  const onClickHandlerMiniLogo = () => {
    if (showMainMenuDesctop) toggleMainMenuDesctop();

    checkStep(DEFAULT_STEP);
    setCurrentStep(DEFAULT_STEP);

    animateScroll.scrollToTop();
  };

  const onActivateLink = (i: number) => {
    if (skipSteps > 0) {
      setSkipSteps((p) => p - 1);
      return;
    }

    scroll(i);
    setCurrentStep(i);
  };

  return (
    <div ref={mainDivElement} className={s.mainBlock}>
      <Width>
        <div className={s.subHeader}>
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={isActive}
            timeout={150}
            classNames="showMiniLogo"
          >
            <div aria-hidden onClick={onClickHandlerMiniLogo} className={s.miniLogo}>
              <Image className={s.logoImg} height={35} width={31} src={logo} alt={'logo'} />
            </div>
          </CSSTransition>
          <nav className={isActive ? `${s.menu} ${s.show}` : `${s.menu} ${s.close}`}>
            <ul ref={ulElement} className={s.ul}>
              {subHeaderMenu.map((itm, i) => (
                <li style={{ width: itm.width }} key={itm.path}>
                  <Link
                    to={itm.name}
                    spy
                    offset={-60}
                    smooth
                    onSetActive={() => onActivateLink(i)}
                    onClick={() => onClickHandlerNavLink(i)}
                    activeClass={s.active}
                    duration={500}
                    className={s.navLink}
                  >
                    <h4>{itm.name}</h4>
                  </Link>
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
