import { useEffect, useState } from 'react';

// Sections
import HomeSection from './sections/Home';
import TransformBlock from './sections/TransformBlock';
import InterestNumbers from './sections/InterestNumbers';
import { DesireSolution, DesireAllcare, DesireNr1 } from './sections/DesireSystem';
import { DesireDiferenciais, DesireTabs } from './sections/DesireDiffs';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Portfolio from './sections/portfolio';
import Skills from './sections/Skills';

// Components
import Loader from '../components/Loader';
import Clients from './sections/Clients';
import Team from './sections/Team';
import Milestones from './sections/Milestones';
import About from './sections/About';
import Pricing from './sections/Pricing';

// -------------------

function Landing() {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOffLoader, setFadeOffLoader] = useState<boolean>(false);

  useEffect(() => {
    const loaderTimer = setTimeout(handleLoad, 500);
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleLoad = () => {
    setFadeOffLoader(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading ? <Loader fadeOffLoader={fadeOffLoader} /> : <></>}
      <div id="content" className="site-content center-relative">
        <HomeSection />
        <TransformBlock />
        <InterestNumbers />
        <DesireSolution />
        <DesireAllcare />
        <DesireNr1 />
        <DesireDiferenciais />
        <DesireTabs />
        <Services />
        <Portfolio />
        <Clients />
        <Skills />
        <Team />
        <Milestones />
        <About />
        <Pricing />
        <Contact />
      </div>
    </>
  );
}

export default Landing;
