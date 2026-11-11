import React, { useEffect } from 'react';
import { nowTarget } from '../content/now';

/**
 * kopkad.ng/now: forwards straight to the free resource or study that today's
 * post offered (see src/content/now.js). Works out "today" on the reader's
 * device, so it switches at midnight Lagos time without waiting for a rebuild.
 */
const NowPage = () => {
  const target = nowTarget();

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
      <p className="text-gray-600">
        Taking you there…{' '}
        <a href={target} className="font-semibold text-cyan-700 underline">Tap here if nothing happens</a>
      </p>
    </main>
  );
};

export default NowPage;
