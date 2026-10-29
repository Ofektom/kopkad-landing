import React from 'react';
import { ArrowRight, Sprout, BookOpen, CircleCheck, Wrench } from 'lucide-react';
import { goToApp } from '../utils/appNav';

/**
 * "Now do it" — every study and article ends here: sign up free on the main
 * app for the Wealth Builder tool that puts the idea into practice.
 */
const SignupCta = ({ action, eyebrow = 'Put it into practice · free on Kopkad' }) => (
  <div data-testid="signup-cta" className="rounded-3xl bg-gradient-to-br from-cyan-900 to-cyan-700 p-6 sm:p-8 text-white relative overflow-hidden">
    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-orange-500/20 pointer-events-none" />
    <div className="relative">
      <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
        <Sprout className="text-orange-300" size={22} />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-orange-300">{eyebrow}</p>
      <h2 className="text-2xl font-extrabold mt-1 leading-tight">{action.title}</h2>
      <p className="text-cyan-100 mt-2 leading-relaxed max-w-xl">{action.text}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-3 text-sm text-cyan-50">
        {[
          [Wrench, 'Wealth Builder does the maths'],
          [CircleCheck, 'Track income and spending'],
          [BookOpen, 'Lessons and quick checks in the app'],
        ].map(([Icon, label]) => (
          <li key={label} className="flex items-center gap-2"><Icon size={16} className="text-orange-300 flex-shrink-0" /> {label}</li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button
          type="button"
          onClick={() => goToApp('/signup')}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold inline-flex items-center justify-center gap-2"
        >
          {action.button} <ArrowRight size={16} />
        </button>
        <button
          type="button"
          onClick={() => goToApp('/login')}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold"
        >
          I already have an account
        </button>
      </div>
      <p className="text-xs text-cyan-200 mt-4">Free to join at app.kopkad.ng and in the Android app.</p>
    </div>
  </div>
);

export default SignupCta;
