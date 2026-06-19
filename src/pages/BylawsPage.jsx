import React from 'react';
import BylawsContent from '../legal/BylawsContent';

const BylawsPage = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
      <div className="flex justify-center mb-6">
        <img src="/logo.svg" alt="Kopkad" style={{ width: '160px', height: '56px', objectFit: 'contain', objectPosition: 'center 48%' }} />
      </div>
      <BylawsContent />
    </div>
  </div>
);

export default BylawsPage;
