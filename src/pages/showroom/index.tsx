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
          src="http://res.watermcc.top/blog/2023/20231013-1697189987.png"
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
          src="http://res.watermcc.top/blog/2023/20231013-1697189968.png"
          alt="next"
          onClick={() => {
            swiperInstance?.slideNext();
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.box}>
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