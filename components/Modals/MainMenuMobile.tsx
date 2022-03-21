import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Accordion, AccordionDetails, AccordionSummary, SwipeableDrawer } from '@mui/material';
import { menuItemsFirst, menuItemsSecond } from 'consts';
import { Email, Messengers, Phone } from 'components/UI';
import { pathRoutes } from 'types';
import { useActions, useTypedSelector } from 'hooks';
import s from 'styles/components/Modals/MainMenuMobile.module.scss';

interface MainMenuMobileProps {
  show: boolean;
}

export const MainMenuMobile: FC<MainMenuMobileProps> = ({ show }) => {
  const [expanded, setExpanded] = useState<boolean | string>(false);
  const { showMainMenuMobile } = useTypedSelector((state) => state.modals);
  const { toggleMainMenuMobile } = useActions();
  const router = useRouter();

  const onChangeHandler =
    (id: string) => (event: React.SyntheticEvent<Element>, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    };

  const onClickHandler = (path: pathRoutes) => {
    if (showMainMenuMobile) {
      toggleMainMenuMobile();
    }

    router.push(path);
  };

  return (
    <SwipeableDrawer
      disableBackdropTransition
      anchor={'bottom'}
      open={show}
      onClose={() => toggleMainMenuMobile()}
      onOpen={() => toggleMainMenuMobile()}
    >
      <div className={s.mainBlock}>
        <nav>
          {menuItemsFirst.map(({ name, Icon, path }, index) => {
            if (index === 3) {
              return (
                <React.Fragment key={name}>
                  <div aria-hidden onClick={() => onClickHandler(path)} className={s.item}>
                    <div className={s.link}>
                      <Icon />
                      <h4>{name}</h4>
                    </div>
                  </div>

                  <div className={s.hr} />

                  <div className={s.pdLeft}>
                    {menuItemsSecond.map(({ name, Icon, path, isAccordion, items }, indx) => {
                      if (isAccordion) {
                        return (
                          <Accordion
                            key={name}
                            className={s.accordion}
                            expanded={expanded === `id:${indx}`}
                            onChange={onChangeHandler(`id:${indx}`)}
                          >
                            <AccordionSummary
                              className={s.summary}
                              expandIcon={<ExpandMoreRoundedIcon className={s.icon} />}
                              aria-controls={`id:${indx}-controls`}
                              id={`id:${indx}-header`}
                            >
                              <div className={s.item}>
                                <div className={s.link}>
                                  <Icon />
                                  <h4>{name}</h4>
                                </div>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails className={s.details}>
                              {items?.map(({ name, Icon, path }, ind) => (
                                <div
                                  className={s.item}
                                  aria-hidden
                                  onClick={() => onClickHandler(path)}
                                  key={ind}
                                >
                                  <div className={s.link}>
                                    <Icon />
                                    <h4>{name}</h4>
                                  </div>
                                </div>
                              ))}
                            </AccordionDetails>
                          </Accordion>
                        );
                      }

                      return (
                        <div
                          aria-hidden
                          onClick={() => onClickHandler(path)}
                          key={indx}
                          className={s.item}
                        >
                          <div className={s.link}>
                            <Icon />
                            <h4>{name}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className={s.hr} />
                </React.Fragment>
              );
            }

            return (
              <div aria-hidden onClick={() => onClickHandler(path)} key={index} className={s.item}>
                <div className={s.link}>
                  <Icon />
                  <h4>{name}</h4>
                </div>
              </div>
            );
          })}

          <div className={s.hr} />

          <div className={s.info}>
            <h3 className={s.title}>Пишите нам в мессенджеры</h3>
            <Messengers className={s.messangers} height="55" width="55" />
            <Phone className={s.phone} />
            <Email className={s.email} />
          </div>
        </nav>
      </div>
    </SwipeableDrawer>
  );
};
