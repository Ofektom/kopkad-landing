/**
 * "Read more" links for each blog post — public writing on the same idea, so
 * readers can go deeper. Every URL was checked to resolve (2026-10-24). Books
 * a lesson credits come first; official Nigerian sources (SEC, NBS, CBN)
 * where the lesson is about investing, scams or inflation.
 */
const W = (path, title) => ({ title, url: `https://en.wikipedia.org/wiki/${path}`, source: 'Wikipedia' });
const SEC_NG = { title: 'Official website: investor alerts and registered operators', url: 'https://sec.gov.ng/', source: 'Securities and Exchange Commission, Nigeria' };
const NBS = { title: 'Official website: inflation (CPI) reports', url: 'https://nigerianstat.gov.ng/', source: 'National Bureau of Statistics, Nigeria' };
const CBN = { title: 'Official website', url: 'https://www.cbn.gov.ng/', source: 'Central Bank of Nigeria' };
const PAY_YOURSELF_FIRST = { title: "The 'Pay Yourself First' approach", url: 'https://www.investopedia.com/terms/p/payyourselffirst.asp', source: 'Investopedia' };
const GOOD_BAD_DEBT = { title: 'Understanding good vs bad debt', url: 'https://www.investopedia.com/articles/pf/12/good-debt-bad-debt.asp', source: 'Investopedia' };
const DEBT_AVALANCHE = { title: 'The debt avalanche method', url: 'https://www.investopedia.com/terms/d/debt-avalanche.asp', source: 'Investopedia' };

export const FURTHER_READING = {
  'financial-intelligence-journey': [W('Financial_literacy', 'Financial literacy'), W('Personal_budget', 'Personal budget')],
  'the-pie-pay-yourself-first': [PAY_YOURSELF_FIRST, W('Saving', 'Saving')],
  'the-snowball': [W('Compound_interest', 'Compound interest'), W('Time_value_of_money', 'Time value of money')],
  'cut-costs-cut-back-cut-out': [W('Frugality', 'Frugality'), W('Personal_budget', 'Personal budget')],
  'budget-track-system': [W('Personal_budget', 'Personal budget'), W('Income_statement', 'Income statement')],
  'emergency-fund': [W('Emergency_fund', 'Emergency fund'), W('Precautionary_savings', 'Precautionary savings')],
  'good-debt-bad-debt': [GOOD_BAD_DEBT, DEBT_AVALANCHE],
  'three-money-statements': [W('Income_statement', 'Income statement'), W('Cash_flow_statement', 'Cash flow statement'), W('Balance_sheet', 'Balance sheet')],
  'fixed-vs-variable-costs': [W('Fixed_cost', 'Fixed cost'), W('Variable_cost', 'Variable cost')],
  'financial-independence-number': [W('FIRE_movement', 'The FIRE movement (financial independence)'), W('Net_worth', 'Net worth')],
  'investing-basics': [W('Diversification_(finance)', 'Diversification'), W('Dollar_cost_averaging', 'Dollar-cost averaging'), SEC_NG],
  'avoid-scams-and-speculation': [W('Ponzi_scheme', 'Ponzi scheme'), W('Advance-fee_scam', 'Advance-fee scams'), SEC_NG],
  'seven-cures-lean-purse': [W('The_Richest_Man_in_Babylon', 'The Richest Man in Babylon (George S. Clason)')],
  'assets-vs-liabilities': [W('Rich_Dad_Poor_Dad', 'Rich Dad Poor Dad (Robert T. Kiyosaki)'), W('Net_worth', 'Net worth')],
  'psychology-of-money': [W('The_Psychology_of_Money', 'The Psychology of Money (Morgan Housel)')],
  'rich-vs-looking-rich': [W('The_Millionaire_Next_Door', 'The Millionaire Next Door (Stanley & Danko)'), W('Frugality', 'Frugality')],
  'clearing-debt-snowball-avalanche': [W('The_Total_Money_Makeover', 'The Total Money Makeover (Dave Ramsey)'), W('Debt-snowball_method', 'Debt-snowball method'), DEBT_AVALANCHE],
  'inflation-rule-of-72': [W('Rule_of_72', 'Rule of 72'), W('Inflation', 'Inflation'), NBS],
  'automate-saving': [W('I_Will_Teach_You_to_Be_Rich', 'I Will Teach You to Be Rich (Ramit Sethi)'), PAY_YOURSELF_FIRST],
  'time-is-money': [W('Your_Money_or_Your_Life', 'Your Money or Your Life (Vicki Robin & Joe Dominguez)'), W('Time_value_of_money', 'Time value of money')],
  'spotting-ponzi-schemes': [SEC_NG, W('Ponzi_scheme', 'Ponzi scheme'), W('Pyramid_scheme', 'Pyramid scheme'), CBN],
};

export const furtherReading = (slug) => FURTHER_READING[slug] || [];
