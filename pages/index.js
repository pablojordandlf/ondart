import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { Analytics } from '@vercel/analytics/react';

const Home = () => (
  <div className="bg-primary-white overflow-hidden">
    <Analytics />
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <GetStarted />
      <WhatsNew />
    </div>
    
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Feedback />
      <Insights />
      <World />
    </div>
    <Footer />
  </div>
);

export default Home;
