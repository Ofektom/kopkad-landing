import React, { useEffect } from 'react';
import LandingNavbar from './LandingNavbar';
import Landing from './Landing';
import Footer from './Footer';
import { goToApp, goToCoop } from '../utils/appNav';

const LandingPage = () => {
  // Arriving from another page at a section (/#wealth-builder, from the blog
  // or the terms): the section only exists once this page has rendered.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <LandingNavbar onCoopClick={() => goToCoop('/')} />
      <Landing
        onStartClick={() => goToApp('/')}
        onCoopClick={() => goToCoop('/')}
        onMerchantClick={() => goToApp('/signup')}
      />
      <Footer />
    </>
  );
};

export default LandingPage;
