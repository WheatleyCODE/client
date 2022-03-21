import { FC, useRef, useState } from 'react';
import { Navigation, Pagination, A11y, Swiper as Swpr } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { CSSTransition } from 'react-transition-group';
import { banners } from 'consts/banners';
import 'swiper/css';
import 'swiper/css/pagination';
import s from 'styles/components/Sliders/ImgSlider.module.scss';

export const ImgSlider: FC = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [activeNavigation, setActiveNavigation] = useState({ prev: true, next: true });

  const onSliderChange = (swiper: Swpr) => {
    if (swiper.activeIndex === 0) {
      setActiveNavigation((p) => ({ ...p, prev: false }));
      return;
    }

    if (swiper.activeIndex === banners.length - 1) {
      setActiveNavigation((p) => ({ ...p, next: false }));
      return;
    }

    setActiveNavigation(() => ({ prev: true, next: true }));
  };

  return (
    <div className={s.mainBlock}>
      <div className={s.navigationPrev} ref={navigationPrevRef}>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={activeNavigation.prev}
          timeout={200}
          classNames="showModal"
        >
          <div className={s.container}>
            <ChevronLeftRoundedIcon />
          </div>
        </CSSTransition>
      </div>
      <div className={s.navigationNext} ref={navigationNextRef}>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={activeNavigation.next}
          timeout={200}
          classNames="showModal"
        >
          <div className={s.container}>
            <ChevronRightRoundedIcon />
          </div>
        </CSSTransition>
      </div>

      <Swiper
        className={s.swiper}
        modules={[Pagination, Navigation, A11y]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          if (swiper) {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
        spaceBetween={23}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        initialSlide={2}
        touchAngle={30}
        touchRatio={1.2}
        onSlideChange={onSliderChange}
      >
        {banners.map(({ id, img, alt }) => (
          <SwiperSlide key={id}>
            <div className={s.slide}>
              <Image src={img} alt={alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.shadowRight} />
      <div className={s.shadowLeft} />
    </div>
  );
};
