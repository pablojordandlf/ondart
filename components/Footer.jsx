'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import Link from 'next/link';


const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-[#B0B0B0]">
          Rellena el formulario
        </h4>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6QB-LmPDSowgZBWDNAdL-heAGsdIrSjZI2O_nY9PUsSOjJw/viewform?usp=sf_link">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]" >
            
            <span className="font-normal text-[16px] text-white">
              Rellena el formulario
            </span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
      </div>
    </div>
  </motion.footer>
);

export default Footer;
