'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { TitleText} from '../components';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <TitleText
          title={<>Lo que mueve a ONDART </>}
          textStyles="text-center"
        />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-[1000px] mx-auto gradient-05 sm:p-8 p-4 rounded-[32px] border-[0px] border-[#6A6A6A]"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%' }}>
          <p className="text-center font-normal sm:text-[18px] text-[16px] sm:leading-[35.6px] leading-[39.6px] text-black">
            Ondart surge de una vocación patrimonial y de la búsqueda de la belleza y el gusto por las cosas bien hechas. 
            <br /><br />El propósito de esta empresa, que comienza su andadura en 2023, es poner en contacto oficios artesanales españoles con aquellos que los necesiten en el desarrollo de sus labores arquitectónicas, decorativas o de restauración. 
            <br /><br />Covadonga es la cara visible y activa de este proyecto que lleva años rumiándose dentro de su núcleo familiar. Historiadora del Arte y amante del Patrimonio español, que tiene una de sus manifestaciones más palpables en las artes aplicadas, emprende este trabajo con ilusión y compromiso. 
            <br /><br />Son muchos los valientes repartidos por el territorio español que mantienen, frente a las ventajas de la industrialización, oficios que recogen el acervo cultural de siglos de historia. 
            <br /><br />Todas estas artesanías se materializan en objetos eternos. Ondart quiere poner foco en lo local y ser ese puente de encuentro que dé respuesta a las necesidades de aquellos profesionales o particulares que quieran productos artesanales personalizados, ad hoc.
          </p>
        </div>
      </motion.div>

      
    </motion.div>
  </section>
);

export default Feedback;
