import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import CardTokenPage from './components/CardTokenPage';
import TermsPage from './pages/TermsPage';
import CoopMemberTermsPage from './pages/CoopMemberTermsPage';
import CoopPlatformTermsPage from './pages/CoopPlatformTermsPage';
import BylawsPage from './pages/BylawsPage';

const App = () => (
  <Routes>
    <Route path="/"                     element={<LandingPage />} />
    <Route path="/c/:token"             element={<CardTokenPage />} />
    <Route path="/terms"                element={<TermsPage />} />
    <Route path="/coop-member-terms"    element={<CoopMemberTermsPage />} />
    <Route path="/coop-platform-terms"  element={<CoopPlatformTermsPage />} />
    <Route path="/bylaws"               element={<BylawsPage />} />
    <Route path="*"                     element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
