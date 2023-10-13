/*
 * @Author: wuqinfa
 * @Date: 2023-10-13 17:29:03
 * @LastEditors: wuqinfa
 * @Description: 
 */
import type { SwiperClass } from 'swiper/react';

import { useState } from 'react';
import classnames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './index.less';

import 'swiper/css';

const Showroom = (props: Record<string, any>) => {
  const {
    data = [1,2,3,4,5,6,7,8,9,10,11,12],
  } = props;

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleSwiper = (swiper: SwiperClass) => {
    setSwiperInstance(swiper);
    setActiveIndex(swiper.activeIndex);
  };

  const renderController = () => {
    return (
      <div className={styles.controller}>
        <img
          className={classnames(styles.controller__navigation, {
            [styles['controller__navigation--disabled']]: activeIndex === 0,
          })}
          src="https://res.miaocode.com/web-3.0/2-1697012603580.png"
          alt="prev"
          onClick={() => {
            swiperInstance?.slidePrev();
          }}
        />
        <div className={styles.controller__pagination}>
          {
            data.map((item: any, index: number) => {
              return (
                <span
                  key={`page-${item}`}
                  className={classnames(styles.controller__paginationBullet, {
                    [styles['controller__paginationBullet--active']]: activeIndex === index,
                  })}
                  onClick={() => {
                    swiperInstance?.slideTo(index);
                  }}
                />
              );
            })
          }
        </div>
        <img
          className={classnames(styles.controller__navigation, {
            [styles['controller__navigation--disabled']]: activeIndex === (data.length - 1),
          })}
          src="https://res.miaocode.com/web-3.0/3-1697013755404.png"
          alt="next"
          onClick={() => {
            swiperInstance?.slideNext();
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.list}
        speed={700}
        spaceBetween={100}
        slidesPerView="auto"
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      >
        {
          data.map((item: any, index: number) => {
            return (
              <SwiperSlide key={item}>
                <div className={styles.poster}>
                  <img className={styles.poster__img} src="https://res.miaocode.com/web-3.0/Snipaste_2023-10-11_15-44-43-1697010364700.png" alt="" />
                  <div
                    className={classnames(styles.poster__adorn, {
                      [styles['poster__adorn--active']]: activeIndex === index,
                    })}
                  />
                </div>

                <div className={styles.title}>课件名称课件名称课件名课件名称课件名称课件名课件名称课件名称课件名</div>

                <div></div>
              </SwiperSlide>
            );
          })
        }

        { renderController() }
      </Swiper>
    </div>
  );
};

export default Showroom;