import React from 'react';
import LandingNavbar from './LandingNavbar';
import Landing from './Landing';
import Footer from './Footer';
import { goToApp } from '../utils/appNav';

const LandingPage = () => (
  <>
    <LandingNavbar />
    <Landing onStartClick={() => goToApp('/login')} />
    <Footer />
  </>
);

export default LandingPage;
