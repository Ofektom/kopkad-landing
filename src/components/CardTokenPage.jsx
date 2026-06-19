/**
 * CardTokenPage — public route: /c/:token
 *
 * Shown when a customer or agent scans a physical savings card QR code.
 * Uses native fetch (no axios) since the landing project has no API client.
 */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { goToApp } from '../utils/appNav';

const API = import.meta.env.VITE_API_BASE_URL || 'https://kopkad.onrender.com';

const CardTokenPage = () => {
  const { token } = useParams();
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    fetch(`${API}/api/v1/physical-cards/by-token/${token}`)
      .then(r => r.json())
      .then(json => {
        if (json.status) setData(json.data || {});
        else setError(json.message || 'Card not found or invalid.');
      })
      .catch(() => setError('Could not reach the server. Please try again.'))
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 text-center">
      <div className="text-red-400 text-4xl mb-4">✕</div>
      <h2 className="text-white font-bold text-lg mb-2">Invalid Card</h2>
      <p className="text-slate-400 text-sm">{error}</p>
      <button onClick={() => window.location.href = '/'} className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all">
        Go Home
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6">
      {/* Brand */}
      <div className="mb-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mx-auto mb-3">
          <span className="text-white text-2xl">🐷</span>
        </div>
        <h1 className="text-white font-extrabold text-xl">Kopkad</h1>
        <p className="text-slate-400 text-xs">Savings card</p>
      </div>

      <div className="w-full max-w-sm bg-slate-800 border border-slate-700 rounded-2xl p-6">
        {data?.is_linked ? (
          <>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-semibold text-slate-300">Active Savings Card</span>
            </div>
            <h2 className="text-white font-bold text-xl mb-1">{data.customer_name}</h2>
            <p className="text-slate-500 text-xs mb-4">Tracking: {data.tracking_number}</p>
            <div className="flex gap-2 flex-wrap mb-5">
              <span className="bg-green-900/30 text-green-300 text-xs px-3 py-1 rounded-lg font-medium">{data.paid_days} days paid</span>
              <span className="bg-amber-900/30 text-amber-300 text-xs px-3 py-1 rounded-lg font-medium">{data.pending_days} pending</span>
              <span className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-lg font-medium">₦{Number(data.daily_amount || 0).toLocaleString()}/day</span>
            </div>
            <button onClick={() => goToApp('/login')} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all">
              Log In to Manage
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-sm font-semibold text-slate-300">Card Not Yet Activated</span>
            </div>
            <p className="text-slate-400 text-sm mb-5">
              {data?.message || 'This card has not been linked to a savings account yet. Create a Kopkad account to activate it.'}
            </p>
            <button onClick={() => goToApp('/signup')} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all mb-3">
              Create a Savings Account
            </button>
            <button onClick={() => goToApp('/login')} className="w-full py-3 rounded-xl text-sm font-semibold text-slate-400 bg-slate-700 hover:bg-slate-600 transition-all">
              Log In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardTokenPage;
