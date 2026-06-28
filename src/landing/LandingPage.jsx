import React from 'react';
import LandingNavbar from './LandingNavbar';
import Landing from './Landing';
import Footer from './Footer';
import { goToApp, goToCoop } from '../utils/appNav';

const LandingPage = () => (
  <>
    <LandingNavbar onCoopClick={() => goToCoop('/login')} />
    <Landing
      onStartClick={() => goToApp('/login')}
      onCoopClick={() => goToCoop('/login')}
    />
    <Footer />
  </>
);

export default LandingPage;
