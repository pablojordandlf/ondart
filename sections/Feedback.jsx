'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%' }}>
          <p className="text-center font-normal sm:text-[20px] text-[16px] sm:leading-[45.6px] leading-[39.6px] text-white">
            ¡Vuestra presencia es nuestro mejor regalo! Estaremos muy agradecidos si podéis ayudarnos en nuestro viaje de novios. <br/>ES37 0182 0972 1702 0169 7571
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/foto1.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
