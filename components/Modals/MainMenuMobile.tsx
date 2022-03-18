import React, { FC, useEffect, useState } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Email, Messengers, Phone } from 'components/UI';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { menuItemsFirst, menuItemsSecond } from 'consts/mobileMenuItems';
import { pathRoutes } from 'types';
import { useRouter } from 'next/router';
import { useActions, useTypedSelector } from 'hooks';
import s from 'styles/components/Modals/MainMenuMobile.module.scss';

export const MainMenuMobile: FC = () => {
  const [expanded, setExpanded] = useState<boolean | string>(false);
  const { showMainMenuMobile } = useTypedSelector((state) => state.modals);
  const { toggleMainMenuMobile } = useActions();
  const router = useRouter();

  const onChangeHandler =
    (id: string) => (event: React.SyntheticEvent<Element>, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  const onClickHandler = (path: pathRoutes) => {
    if (showMainMenuMobile) {
      toggleMainMenuMobile();
    }

    router.push(path);
  };

  return (
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
                            {items?.map(({ name, Icon, path }, ind: any) => (
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
          <Messengers className={s.messangers} height="60" width="60" />
          <Phone className={s.phone} />
          <Email className={s.email} />
        </div>
      </nav>
    </div>
  );
};
