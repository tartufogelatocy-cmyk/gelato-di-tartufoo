"use client";
import TopHandImage from "@/features/RoulettePage/assets/images/tophand.png";
import BottomHandImage from "@/features/RoulettePage/assets/images/bottomhand.png";
import RouletteImage from "@/features/RoulettePage/assets/images/roulette2.png";
import styles from "@/features/RoulettePage/styles/roulette.module.scss";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { UseGetRandomMovieHook } from "@/hooks/UseGetRandomMovieHook";
import { movies } from "@/constants/movies";
import { Movie } from "@/types/movies";

interface RouletteProps {
  randomPoster: (poster: Movie) => void;
}

export const Roulette = ({ randomPoster }: RouletteProps) => {
  const controls = useAnimation();
  const [angle, setAngle] = React.useState(0);
  const [spinning, setSpinning] = React.useState(false);

  const handleSpin = async () => {
    if (spinning) return;
    setSpinning(true);

    const randomOffset = Math.floor(Math.random() * 360);
    const fastEnd = angle + 360 + 7200; // 20
    const endAngle = fastEnd + randomOffset;

    setAngle(endAngle % 10000);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    await controls.start({
      rotate: fastEnd,
      transition: {
        duration: 2,
        ease: "linear",
      },
    });

    await controls.start({
      rotate: endAngle,
      transition: {
        type: "inertia",
        velocity: 1600,
        power: 0.8,
        timeConstant: 450,
        bounce: 0,
      },
    });

    const randomId = UseGetRandomMovieHook(movies);
    const poster = movies.find((movie) => movie.id === randomId.id);
    console.log(poster);
    if (poster) {
      randomPoster(poster);
    }

    document.body.style.overflow = prevOverflow;
    setSpinning(false);
  };

  return (
    <div className={styles.roulete}>
      <div className={styles.topHand}>
        <Image
          src={TopHandImage}
          alt="Top Hand"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <motion.div
        className={styles.rouleteImage}
        animate={controls}
        initial={{ rotate: 0 }}
        onClick={handleSpin}
        style={{
          cursor: spinning ? "default" : "pointer",
          pointerEvents: spinning ? "none" : "auto",
        }}
      >
        <Image
          src={RouletteImage}
          alt="Roulete"
          fill
          loading="eager"
          priority
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      <div className={styles.bottomHand}>
        <Image
          src={BottomHandImage}
          alt="Bottom Hand"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
