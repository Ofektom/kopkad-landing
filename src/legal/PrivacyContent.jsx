const H = ({ children }) => <h3 className="font-bold text-gray-900 mb-1">{children}</h3>;
const List = ({ items }) => (
  <ul className="list-disc list-inside pl-2 mt-1 space-y-0.5 text-gray-600">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

const PrivacyContent = () => (
  <div className="text-sm text-gray-700 space-y-5 leading-relaxed">

    <div className="text-center border-b border-gray-200 pb-4">
      <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">Privacy Policy</h2>
      <p className="text-sm font-semibold text-gray-700 mt-1">KOPKAD TECHNOLOGY SYSTEMS LTD</p>
      <p className="text-xs text-gray-500 mt-1">Effective: 25 November 2026 &nbsp;·&nbsp; Version 1.0</p>
    </div>

    <section>
      <H>1. Who We Are</H>
      <p>
        Kopkad (kopkad.ng, app.kopkad.ng, the Kopkad mobile apps and the Kopkad assistant on chat apps
        such as WhatsApp) is operated by <strong>KOPKAD TECHNOLOGY SYSTEMS LTD</strong>
        (<strong>"Kopkad"</strong>, <strong>"we"</strong>, <strong>"us"</strong>), a private company
        limited by shares registered with the Corporate Affairs Commission (CAC), 4A Akpabio Street,
        Uyo, Akwa Ibom State, Nigeria. We are the data controller for the personal data described in
        this policy.
      </p>
      <p className="mt-2">
        Where you use Kopkad as a member of a cooperative society, that cooperative also decides how
        your membership data is used and is a joint controller for it. This policy explains how Kopkad
        handles it.
      </p>
    </section>

    <section>
      <H>2. The Data We Collect</H>
      <p><strong>2.1 Data you give us</strong></p>
      <List items={[
        'Account details: full name, phone number, email address, date of birth, address and login PIN (stored only in hashed form).',
        'Identity (KYC) details: BVN, NIN, ID documents, photographs or selfies used for verification, and your bank account details for payouts.',
        'Savings, thrift, wallet and loan activity: plans, contributions, transfers, withdrawals and group memberships.',
        'Money-management entries you choose to add, such as income, expenses, budgets and bank-alert text you paste or forward to us.',
        'Messages you send us through support, the app or a chat app.',
      ]} />
      <p className="mt-2"><strong>2.2 Data collected automatically</strong></p>
      <List items={[
        'Device and log data: IP address, device type, operating system, app version, and dates and times of access, used for security and fraud prevention.',
        'App usage analytics in our mobile app (screens viewed, features used), used to improve the product.',
        'Cookies and similar browser storage that keep you signed in and secure. We do not use advertising cookies.',
      ]} />
      <p className="mt-2"><strong>2.3 Data from others</strong></p>
      <List items={[
        'Identity verification providers and our payment processor, who confirm details such as your BVN, NIN or bank account name.',
        'Your field agent or cooperative, if they register you or record contributions on your behalf.',
        'Payment notifications when money is paid into your Kopkad wallet or deposit account.',
      ]} />
    </section>

    <section>
      <H>3. How We Use Your Data</H>
      <List items={[
        'To create and run your account, savings plans, wallet, thrift groups and other services you request (performance of a contract).',
        'To verify your identity, prevent fraud and meet anti-money-laundering, tax and other legal duties (legal obligation).',
        'To send you transaction alerts, security codes and service messages by SMS, email, push notification or chat app.',
        'To give you money insights, lessons and reminders in Wealth Builder, if you use those features.',
        'To keep the platform secure, fix problems and improve our services (legitimate interests).',
        'To send you product news, only where you have agreed and with an easy way to opt out (consent).',
      ]} />
      <p className="mt-2">We do not sell your personal data, and we do not use it for third-party advertising.</p>
    </section>

    <section>
      <H>4. The Kopkad Assistant on WhatsApp and Other Chat Apps</H>
      <p>
        The assistant is optional, and you switch it on from the app. When you use it:
      </p>
      <List items={[
        'We use your phone number, or the chat address you link, to recognise you, and we keep the messages you send and the replies we send so we can provide the service and keep records of actions you confirm.',
        'Messages pass through the chat platform, for example WhatsApp, which is operated by Meta and is subject to its own privacy policy.',
        'To understand a typed request, the text of that message may be processed by an artificial-intelligence service provider. Bank-alert text is read by our own systems and is not sent to an AI provider.',
        'Money moves only when you tap a confirmation button. We never ask for your PIN or one-time codes in a chat.',
        'Send STOP at any time, or switch the assistant off in the app, to stop all messages and unlink the chat.',
      ]} />
    </section>

    <section>
      <H>5. Who We Share Data With</H>
      <p>We share personal data only as needed to provide Kopkad, and only with:</p>
      <List items={[
        'Payment processors and banks (for example Paystack and its partner banks) to collect, hold and pay out money and to create deposit accounts.',
        'Identity verification providers (for example Prembly and Smile ID) to confirm your identity.',
        'Messaging providers for SMS, email, push notifications and chat apps (for example Termii and Meta for WhatsApp).',
        'Hosting, storage, analytics and AI service providers that run parts of our service for us (for example Cloudinary, PostHog, Anthropic and Groq).',
        'Your cooperative society or field agent, for the accounts and groups they manage for you.',
        'Regulators, law enforcement, courts and tax authorities where the law requires it, and professional advisers under a duty of confidentiality.',
        'A buyer or successor if our business is reorganised or sold, under the same protections.',
      ]} />
      <p className="mt-2">
        Our service providers may only use your data to provide their service to us, under written
        agreements that require them to protect it.
      </p>
    </section>

    <section>
      <H>6. International Transfers</H>
      <p>
        Some providers, including Meta, our analytics provider and our AI providers, process data
        outside Nigeria, for example in the United States. Where we transfer data abroad we do so in
        line with the Nigeria Data Protection Act 2023, using safeguards such as contractual
        protections, and only what each service needs.
      </p>
    </section>

    <section>
      <H>7. How Long We Keep Data</H>
      <p>
        We keep your data while your account is open. After it closes we keep financial and identity
        records for as long as the law requires, generally at least five years for anti-money-laundering
        purposes. We then delete or anonymise them. Chat messages and analytics data are kept for
        shorter periods unless they form part of a transaction record.
      </p>
    </section>

    <section>
      <H>8. How We Protect Data</H>
      <p>
        We protect personal data with encryption in transit, encryption of sensitive fields at rest,
        hashed PINs, access controls, two-factor authentication for staff, and activity logging. No
        system is completely secure, so please keep your PIN and one-time codes private. Kopkad will
        never ask you for them.
      </p>
    </section>

    <section>
      <H>9. Your Rights</H>
      <p>Under the Nigeria Data Protection Act 2023 you may:</p>
      <List items={[
        'ask for a copy of your personal data',
        'ask us to correct inaccurate data',
        'ask us to delete your data, or to restrict or stop certain processing',
        'receive your data in a portable format',
        'withdraw any consent you have given, without affecting earlier processing',
        'complain to the Nigeria Data Protection Commission (ndpc.gov.ng)',
      ]} />
      <p className="mt-2">
        To use any of these rights, email <a href="mailto:support@kopkad.ng" className="text-cyan-700 underline">support@kopkad.ng</a>.
        We may need to confirm your identity first and will reply within 30 days.
      </p>
    </section>

    <section>
      <H>10. Deleting Your Account and Data</H>
      <p>
        To delete your Kopkad account and personal data, email{' '}
        <a href="mailto:support@kopkad.ng" className="text-cyan-700 underline">support@kopkad.ng</a> from
        the email address on your account, or call 09079095259 from your registered phone number, with
        the subject "Delete my account". We will first help you withdraw any balance, then close your
        account and delete or anonymise your data, except records we must keep by law (section 7). To
        stop only the chat assistant, send STOP in the chat or switch it off in the app.
      </p>
    </section>

    <section>
      <H>11. Children</H>
      <p>
        Kopkad is not intended for anyone under 18, and we do not knowingly collect their personal
        data. If you believe a child has given us data, contact us and we will delete it.
      </p>
    </section>

    <section>
      <H>12. Changes to This Policy</H>
      <p>
        We may update this policy. We will post the new version here with a new effective date, and
        tell you in the app or by message when a change is significant.
      </p>
    </section>

    <section>
      <H>13. Contact Us</H>
      <p>
        KOPKAD TECHNOLOGY SYSTEMS LTD, 4A Akpabio Street, Uyo, Akwa Ibom State, Nigeria ·{' '}
        <a href="mailto:support@kopkad.ng" className="text-cyan-700 underline">support@kopkad.ng</a> · 09079095259
      </p>
    </section>

  </div>
);

export default PrivacyContent;
