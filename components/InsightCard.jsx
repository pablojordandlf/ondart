'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

import Link from 'next/link';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-[#B0B0B0]">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-[#B0B0B0]">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[0px] "
      >
        <Link href= "https://drive.google.com/file/d/1LNjz6iaGgB-EnO6_U_G3ROqAMS_4jBD0/view">  
          <img
            src="/flecha-correcta.png" 
            alt="arrow"
            className="w-[50%] h-[40%] object-contain "
          />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
