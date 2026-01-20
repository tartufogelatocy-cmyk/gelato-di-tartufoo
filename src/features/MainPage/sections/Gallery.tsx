"use client";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { GALLERY_ITEMS } from "../constants/galleryItems";
import Image from "next/image";
import styles from "@/features/MainPage/styles/gallery.module.scss";
import "swiper/css";

export const Gallery = () => {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const calcVisible = (swiper: SwiperType) => {
    const slide = swiper.slides[swiper.activeIndex] as HTMLElement | undefined;
    if (!slide) return 1;
    const slideWidth = slide.clientWidth;
    const space = swiper.params.spaceBetween as number;
    const count = Math.floor((swiper.width + space) / (slideWidth + space));
    return Math.max(count, 1);
  };

  const total = GALLERY_ITEMS.length;
  const progress = Math.min(((active + visibleCount) / total) * 100, 100);

  return (
    <section id="gallery" className={styles.gallery}>
      <SectionTitle text="Gallery" />

      {/* Desktop grid */}
      <div className={styles.galleryItemsDesktop}>
        {GALLERY_ITEMS.map((item) => (
          <div className={styles.galleryItem} key={item.alt}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Mobile slider */}
      <div className={styles.gallerySlider}>
        <Swiper
          spaceBetween={13}
          slidesPerView="auto"
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          onResize={(swiper) => {
            const perView = calcVisible(swiper);
            setVisibleCount(perView);
          }}
          onInit={(swiper) => {
            const perView = calcVisible(swiper);
            setVisibleCount(perView);
          }}
        >
          {GALLERY_ITEMS.map((item) => (
            <SwiperSlide key={item.alt}>
              <div className={styles.galleryItem}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};
