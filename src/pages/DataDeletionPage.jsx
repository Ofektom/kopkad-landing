import React from 'react';
import { Link } from 'react-router-dom';

const H = ({ children }) => <h3 className="font-bold text-gray-900 mb-1">{children}</h3>;
const List = ({ items, ordered = false }) => {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`${ordered ? 'list-decimal' : 'list-disc'} list-inside pl-2 mt-1 space-y-0.5 text-gray-600`}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </Tag>
  );
};
const Email = () => (
  <a href="mailto:support@kopkad.ng?subject=Delete%20my%20account" className="text-cyan-700 underline">support@kopkad.ng</a>
);
const Phone = () => (
  <a href="tel:+2349079095259" className="text-cyan-700 underline">09079095259</a>
);

const DataDeletionPage = () => (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
      <div className="flex justify-center mb-6">
        <img src="/logo.svg" alt="Kopkad" style={{ width: '160px', height: '56px', objectFit: 'contain', objectPosition: 'center 48%' }} />
      </div>

      <div className="text-sm text-gray-700 space-y-5 leading-relaxed">
        <div className="text-center border-b border-gray-200 pb-4">
          <h1 className="text-base font-bold text-gray-900 uppercase tracking-wide">User Data Deletion</h1>
          <p className="text-sm font-semibold text-gray-700 mt-1">KOPKAD TECHNOLOGY SYSTEMS LTD</p>
          <p className="text-xs text-gray-500 mt-1">Effective: 26 November 2026</p>
        </div>

        <p>
          You can ask us to delete your Kopkad account and the personal data we hold about you at any
          time. This applies to the Kopkad web app, the Kopkad mobile apps and the Kopkad assistant on
          chat apps such as WhatsApp.
        </p>

        <section>
          <H>How to request deletion</H>
          <List ordered items={[
            'Email support@kopkad.ng from the email address on your account, or call 09079095259 from your registered phone number.',
            'Use the subject "Delete my account" and include the name and phone number on your account.',
            'We will confirm your identity before acting on the request, so nobody else can delete your account.',
          ]} />
          <p className="mt-2">
            Email: <Email /> &nbsp;·&nbsp; Phone: <Phone />
          </p>
        </section>

        <section>
          <H>What happens next</H>
          <List items={[
            'If you have money in your wallet or savings, we first help you withdraw it to your bank account.',
            'We then close your account and delete or anonymise your personal data.',
            'We reply to every request within 30 days and confirm when deletion is complete.',
          ]} />
        </section>

        <section>
          <H>What we delete</H>
          <List items={[
            'Your profile details: name, email address, phone number and photo',
            'Your chat assistant messages and linked chat account details',
            'Your login details, devices, notification settings and app preferences',
            'Analytics and usage data linked to you',
          ]} />
        </section>

        <section>
          <H>What we must keep</H>
          <p>
            Nigerian law requires us to keep financial and identity records, such as transactions and
            verification (KYC) records, generally for at least five years after your account closes,
            for anti-money-laundering purposes. We keep these securely, use them only to meet those
            legal duties, and delete or anonymise them when the period ends.
          </p>
        </section>

        <section>
          <H>Stopping only the chat assistant</H>
          <p>
            If you want to keep your account but stop using the Kopkad assistant on WhatsApp, send STOP
            in the chat or switch the assistant off in the app. To also delete the chat messages we hold,
            email <Email /> with the subject "Delete my chat data".
          </p>
        </section>

        <section>
          <H>More information</H>
          <p>
            See our <Link to="/privacy" className="text-cyan-700 underline">Privacy Policy</Link> for
            how we handle your data and your other rights under the Nigeria Data Protection Act 2023.
            You can also complain to the Nigeria Data Protection Commission (ndpc.gov.ng).
          </p>
          <p className="mt-2">
            KOPKAD TECHNOLOGY SYSTEMS LTD, 4A Akpabio Street, Uyo, Akwa Ibom State, Nigeria
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default DataDeletionPage;
