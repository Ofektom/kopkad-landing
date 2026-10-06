import React from 'react';
import LandingNavbar from './LandingNavbar';
import Landing from './Landing';
import Footer from './Footer';
import { goToApp, goToCoop } from '../utils/appNav';

const LandingPage = () => (
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

export default LandingPage;
