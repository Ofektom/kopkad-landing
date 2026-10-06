# Kopkad: Complete Feature Reference

A full list of everything Kopkad offers, kept in this public repo because the rest of
the codebase is private. The website (`src/landing/Landing.jsx`) shows a selection; this
file is the complete list.

**Availability labels**
- **Live**: open to the public.
- **On request**: built, but switched on per cooperative by the Kopkad team.
- **Not public**: exists in the product but is hidden or not launched. Treat it as unavailable.

_Last updated: October 2026._

---

## Products

| Product | Address | For |
|---|---|---|
| **Kopkad** (main app) | app.kopkad.ng · Android app | Personal savers, merchants, field savings agents |
| **Kopkad Pay** | Inside the main app | Merchants: phone-based POS and transfers |
| **CoopX by Kopkad** (also called "Cooperative by Kopkad") | cooperative.kopkad.ng | Cooperative societies, their staff and their members |
| **Website** | kopkad.ng | Public site, terms and bye-laws |

Company: 4A Akpabio Street, Uyo, Akwa Ibom State, Nigeria · support@kopkad.ng · 09079095259.

### Business model facts
- Kopkad is a **technology company**, not a bank and not a licensed lender.
- Payments and account numbers are provided through **licensed payment providers** (Paystack).
- In CoopX, **the cooperative** lends to its own members; Kopkad provides the software.

---

## 1. Kopkad main app

### 1.1 Accounts and sign-up — Live
- Sign up with a phone number, verified by an OTP sent by SMS or email; log in with a PIN.
- Account types at sign-up: **Personal Savings** or **Become a Merchant**.
- The same phone number can hold a personal account and a merchant account, and you can switch between them from the dashboard.
- **KYC** (legal name, BVN, bank account) unlocks your own permanent account number.
- Security: login PIN, OTP verification, a security question (needed for merchant charges of ₦50,000+), automatic logout after inactivity, and a transaction PIN for merchant transfers.
- **Learn** help centre: in-app guides with screenshots for every feature.

### 1.2 Savings — Live
- **No commission to save.** Commission is not charged on any personal savings account.
- **Interest on savings:** accrues daily and is credited monthly, **up to 20% per annum** depending on balance and duration. The rate can change with notice; 10% withholding tax applies.
- **Saving streak:** marking consistently adds a bonus to your effective interest rate.
- **Savings plans:** **Serial** (fixed amount on a fixed schedule) or **Target** (a goal amount by a date). Each card shows its projected interest.
- **Marking:** tap dates on a calendar to mark them paid, individually or in bulk. You can pay by bank transfer to a one-time account number, card or USSD, or from your wallet.
- **Savings list:** every plan at a glance, filterable by status.
- **Payouts:** when a plan completes, request payout to your bank account or your wallet. The net amount is shown before you confirm.

### 1.3 Locked Savings — Live
- Lock money for **3, 6, 9 or 12 months** at a fixed rate of **up to 20% per annum**. The rate is set at creation and doesn't change for the term.
- **Flexible Lock:** keep adding money until maturity. **Fixed Lock:** one lump sum.
- Projected interest at maturity (after 10% withholding tax) is shown before you commit.
- Fund it from your wallet or straight from a savings payout.

### 1.4 Wallet — Live
- One wallet per person for payouts, refunds and money received.
- **Permanent 10-digit account number** (after KYC). Top up by transferring from any Nigerian bank app; no reference needed.
- Withdraw to your bank account; the exact amount is shown before you confirm.
- Move wallet money into Locked Savings.
- Customers' wallets can be charged by merchants (with the customer's SMS code) and can receive To Kopkad transfers.
- **Alerts** for every credit and debit by email and push, plus SMS if enabled. In-app and push alerts are free; SMS alerts carry a fee and can be switched off.

### 1.5 Fees
- No commission on savings.
- SMS alert fee (avoidable by switching to in-app or push alerts).
- Processing fee on instant or off-cycle withdrawals to bank, and a bank-transfer fee on payouts. Amounts are set by Kopkad and shown before you confirm.
- Merchant fees (charges, transfers, deposits) are set by Kopkad and shown before you confirm.

### 1.6 Merchant (Kopkad Pay) — Live (launched October 2026)
A **merchant** is a Kopkad account for anyone who sells goods or services: shops,
market traders, pharmacies, food vendors, and transport operators (keke, danfo,
ride-hailing). The merchant's phone is the POS, built for fast, one-handed use. Every
merchant is also a **field agent** (section 1.7), so selling and savings collection
happen in one app.

**Becoming a merchant**
- Choose **"Become a Merchant"** at sign-up, or tap **"Become a Merchant"** in the personal dashboard's menu.
- The same phone number keeps both a personal savings account and a merchant account, and you can switch between them any time ("Switch to Merchant" / "Personal Savings").
- Complete KYC (BVN + bank account). The merchant application is reviewed and approved before the merchant can collect.

**Merchant wallet card**
- Shows **Wallet Balance** (money for selling and transfers) and **POS Earnings**.
- **Top Up This Account:** the merchant's permanent 10-digit account number, funded by transfer from any bank app.
- **Share my account / QR:** a printable **QR sticker** and shareable link for the merchant's account. Anyone, Kopkad user or not, scans it and pays by bank transfer from any bank app; no app or amount entry is needed.
- **Withdraw to Bank**, with the fee shown before you confirm.

**POS actions** (three equal tiles)
- **Charge Customer:** the merchant enters the customer's phone number, the amount and an optional narration.
  - The customer receives a **6-digit SMS code** (valid 3 minutes; resend available) and reads it out.
  - The merchant enters the code and the money moves from the customer's Kopkad wallet to the merchant instantly.
  - The customer needs **no smartphone, data, card or app**, only a phone that receives SMS and a Kopkad wallet.
  - Charges of **₦50,000+** also need the customer's own security answer. Customers without one are capped below ₦50,000 per charge.
  - Limits apply per charge, per customer per day, and per merchant per day.
- **To Kopkad:** send instantly to any Kopkad user by phone number. The recipient's name is shown before you confirm. Requires the merchant's transaction PIN.
- **To Bank:** send to any Nigerian bank account, protected by the merchant's transaction PIN. Shows "Transfer successful" once the bank accepts it, sends an alert when it lands, and refunds automatically if it fails.

**Transactions and alerts**
- One **Transactions** page: sales, transfers, deposits, withdrawals, fees and agent earnings. Filter chips: POS, Agent, Deposits, Withdrawals, Fees.
- Instant debit and credit alerts for both merchant and customer (in-app, email or push, plus SMS where enabled). The customer also gets an SMS receipt for each charge.

**Fees:** set by Kopkad and shown before confirming. Charging customers and To Kopkad
transfers currently default to no fee; To Bank and merchant deposits carry a fee.

### 1.7 Field agent (savings collection) — Live
Field agents collect and record customers' daily savings in the community. Every
merchant account includes these tools on its **Dashboard**:

- **Scan Savings Card:** scan a customer's **QR savings card** to open their account instantly, then choose which savings plan to mark.
- **AJO daily card marking:** record a customer's contribution for one or many days, paid from the agent's wallet. The customer gets an alert.
- **Agent Customers:** two lists, **QR card** customers (those you've marked for) and **Referred customers** (those who signed up with your code). Shows each customer's total markings and savings, and lets you add a new customer.
- **Customer Health:** each customer is flagged **OK**, **At risk** or **Lapsed** based on recent markings, so you know who to follow up with.
- **Agent Tier:** **Starter → Active Agent → Star Agent → Elite → Champion**, with progress to the next tier.
- **Marking Streak:** consecutive days of marking, with the next bonus shown.
- **Milestones:** a checklist of goals that pay milestone bonuses.
- **Progress to Payday:** earnings so far this cycle and the next scheduled payout.
- **Recent Earnings:** the latest bonuses and payouts.
- **Leaderboard:** monthly ranking against other agents by customer growth and savings volume.
- **My Referral Code:** agent code, sign-up link, and a pre-built share message to onboard customers.
- **Earnings:** marking and streak bonuses, a one-off activation milestone, referral bonuses when a referred customer funds and keeps a balance for the retention period, and a monthly trail on retained customers' balances. There is no flat sign-up bonus and no per-marking commission. Earnings are paid out on scheduled payout days and can be withdrawn to bank.
- **Learn:** in-app guides for every merchant and agent feature.

### 1.8 Thrift savings groups (main app) — Not public yet
**Status:** built, but hidden for customers and merchants on staging and production
during the gradual launch. Thrift is fully live in **CoopX** (section 2). In the main
app it is called **Savings Groups**.

- **Group types:**
  - **Rigid Group (Ajo / Esusu):** a fixed contribution on a fixed schedule with rotational payout, so each member collects the pot in turn.
  - **Flexible Group (Savings Pool):** variable contributions with no rotation.
- **Frequencies:** weekly, bi-weekly, monthly or quarterly.
- **Group openings:** the organiser posts an opening and shares a public link. People register their interest with a name and phone number, and the organiser selects interested people and creates the group. Approving adds a member immediately.
- **Contribution grid:** every member's contribution slots in one view. Members pay their own slot by card or bank (Paystack) or from their wallet.
- **Payout schedule:** the order of who collects when.
  - Members choose their payout destination (bank transfer or wallet) and save bank details.
  - Members can **request a payout swap** with another member, who accepts or rejects it.
  - The organiser records or confirms payouts, and can reverse a mistaken one.
- **Organiser commission (optional):** recurring per contribution (a percentage or flat amount) or a one-time upfront fee, with a preview of commission per cycle and each member's payout.
- Members are notified about contributions and payouts.

### 1.9 Mobile app
- **Android:** Live, as a direct download from app.kopkad.ng (not on Google Play yet).
- **iPhone:** use the web app at app.kopkad.ng (no App Store app yet).
- The mobile app mirrors the web app's merchant, field-agent and customer features.

### 1.10 Other main-app features that are not public
- Cash flow monitoring, budget planner, daily expense tracker and financial statements (hidden for customers and merchants)
- Agents creating their own savings business with sub-agents (closed to new sign-ups)
- Escrow, NFC wearables, tap-a-card "soft POS", offline merchant payments (future)

---

## 2. CoopX by Kopkad

### 2.1 Getting started — Live
- A cooperative registers online (email verification included). Every cooperative gets a free, permanent **yourname.kopkad.ng** subdomain.
- **À-la-carte pricing:** there are no fixed plans and no setup fee. The cooperative picks services and pays the sum of their monthly prices.
- Billing terms: monthly; **1 year, 8% off**; **2 years, 13% off**. Services can be added or dropped any time, and mid-period additions are prorated.
- Prices are set by Kopkad and shown at sign-up.
- **Custom features:** a cooperative can request a custom-built service.

### 2.2 Service catalogue
| Service | Availability | What it does |
|---|---|---|
| **Administration** (required base, included) | Live | Every member gets a cooperative wallet with a **10-digit bank account number**. Covers membership dues, registration fees and KYC verification. |
| **Thrift Contribution** | Live | Rotating ajo/esusu groups: contribution markings, schedules and payouts credited to member wallets. Supports fixed slots and random payout order. Group openings are shared by link so people can join. |
| **Loans** | Live | Member applications, multi-stage approvals, disbursement tracking and repayment schedules. |
| **Branding** | Live | The cooperative's logo, colours and fonts on every member screen, plus a custom domain. |
| **AI Website** | Live | An AI-generated public website (services, leadership, how to join), live in minutes, with several design templates. |
| **Analytics** | Live | Member growth, savings trends, loan performance and financial KPIs. |
| **Listing & Promotion** | Live | A profile in the public cooperative directory with promoted placement. Prospective members browse and request to join. |
| **BNPL store** | On request | The cooperative's own product catalogue. Members buy on instalments with automatic repayment debits. |
| **Asset SPV** | On request | Members pool contributions to co-own an asset, with ownership split pro rata. |

### 2.3 Manager back office — Live
- **Members:** add members one by one, let members self-register, approve KYC, and manage each member (wallet, passbook, withdrawals, registration fee).
- **Member savings (bank savings):** each member's savings with their own deposit account number, and the option to regenerate the account.
- **Savings interest:** the cooperative sets the interest rate on member savings.
- **Withdrawal approvals:** choose automatic or manager-approved withdrawals per cooperative.
- **Wallet and ledger:** the cooperative's wallet and a full transaction ledger.
- **Staff roles:** manager, supervisor, teller and customer service, each with their own permissions.
- **Branches:** record which branch a member belongs to.
- **Teller till and end-of-day reconciliation:** each teller's cash is reconciled at close of day.
- **Two-factor authentication** for managers.
- **Settings and billing:** manage subscribed services and the billing term.

### 2.4 Member portal — Live
- Home: wallet balance and account number.
- Fund the wallet by bank transfer from any bank app; the money arrives within seconds.
- Transactions and **passbook**.
- Thrift groups, loans, and the Store / Asset SPV where the cooperative has them enabled.
- Withdraw to bank (automatic or manager-approved, set by the cooperative).
- Self-service KYC with automatic bank-account name lookup.
- Administration fees (dues, registration).
- Profile and PIN reset.

### 2.5 Public pages — Live
- cooperative.kopkad.ng: product overview, pricing, and the **directory of cooperatives**.
- Each cooperative's own public website (AI Website service) and join page.

---

## 3. Website pages (this repo)
| Path | Page |
|---|---|
| `/` | Landing page |
| `/c/:token` | Scan page for QR savings cards |
| `/terms` | Terms of Use |
| `/coop-member-terms` | Cooperative member terms |
| `/coop-platform-terms` | Cooperative platform operator agreement |
| `/bylaws` | Cooperative bye-laws |

---

## 4. Market context shown on the website
These are third-party market estimates, not Kopkad's own figures: **₦2.4T+** informal
savings pooled annually · **40,000+** cooperatives awaiting digitisation · **80M+**
financially excluded Nigerians.

The testimonials on the website (Amaka O., Chukwudi E., Fatima B.) are illustrative.
