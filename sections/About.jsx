'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

import Link from 'next/link';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Mil gracias" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Estamos muy felices de que podáis acompañarnos en este día tan especial
        
      </motion.p>
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-secondary-white"
      >
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6QB-LmPDSowgZBWDNAdL-heAGsdIrSjZI2O_nY9PUsSOjJw/viewform?usp=sf_link">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]" >
            
            <span className="font-normal text-[16px] text-white">
              Rellena el formulario
            </span>
          </button>
        </Link>
      </motion.p>
        
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
