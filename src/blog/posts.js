import modules from '../content/learnPosts.json';

/**
 * Money lessons for the blog — a preview of the main app's Learn → Financial
 * Literacy modules (savings-system/scripts/seed_learn_modules.py and
 * learn_modules_resources.py), exported to src/content/learnPosts.json.
 *
 * The blog carries only each lesson's key points and takeaway (the same
 * basics as the dashboard flash cards, service/learn.py
 * flashcard_from_lesson). The full lessons — examples, quick checks — stay in
 * the app, so every post sends the reader to sign up to keep learning and to
 * use the Wealth Builder tool that puts the lesson into practice (ACTIONS).
 * Re-export the JSON whenever the lessons change.
 */

/** What each lesson's "do it in the app" target means for a reader who isn't signed up yet. */
export const ACTIONS = {
  money_split: {
    title: 'Split your next income in Wealth Builder',
    text: 'Pick Seed, Grow or Harvest and Kopkad shows exactly how much of every income to save, give and live on.',
    button: 'Set up your Wealth Builder',
  },
  log_expense: {
    title: 'Track your money in Wealth Builder',
    text: 'Log income and spending in seconds, mark needs and wants, and see your budget update as you go.',
    button: 'Start tracking for free',
  },
  emergency_fund: {
    title: 'Build your emergency fund on Kopkad',
    text: 'Set your target (6 months of living costs), link a savings plan to it in Wealth Builder, and watch it fill up.',
    button: 'Start your emergency fund',
  },
  savings: {
    title: 'Start a savings plan',
    text: 'Save daily, weekly or towards a goal — commission-free, with interest accrued every day.',
    button: 'Start saving',
  },
  locked_savings: {
    title: 'Lock money away for your goals',
    text: 'Locked Savings holds money for 3–12 months at a fixed rate, set when you open the plan.',
    button: 'Open Locked Savings',
  },
  statements: {
    title: 'See your own money statements',
    text: 'Wealth Builder turns what you log into an income statement, a cash flow and a balance sheet.',
    button: 'Get your statements',
  },
};
const DEFAULT_ACTION = ACTIONS.money_split;

export const DISCLAIMER = 'For educational purposes only. This is not financial advice.';

export const posts = modules
  .map((m) => ({ ...m, group: m.order <= 12 ? 'Core course' : 'From the classics' }))
  .sort((a, b) => a.order - b.order);

export const getPost = (slug) => posts.find((p) => p.slug === slug) || null;

/** The call to action a post ends with: the last lesson's own action, else Wealth Builder setup. */
export const postAction = (post) => {
  const target = [...post.lessons].reverse().map((l) => l.action).find((t) => t && ACTIONS[t]);
  return ACTIONS[target] || DEFAULT_ACTION;
};

/** A lesson action pointing at another lesson ("learn:<slug>") becomes a link to that post. */
export const relatedSlug = (action) => (action?.startsWith('learn:') ? action.slice(6) : null);

/** "2 lessons · 2 quick checks" — what the full module holds in the app. */
export const inAppSummary = (post) => [
  `${post.lesson_count} ${post.lesson_count === 1 ? 'lesson' : 'lessons'}`,
  post.quiz_count ? `${post.quiz_count} quick ${post.quiz_count === 1 ? 'check' : 'checks'}` : null,
].filter(Boolean).join(' · ');

export const neighbours = (slug) => {
  const i = posts.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? posts[i - 1] : null, next: i >= 0 && i < posts.length - 1 ? posts[i + 1] : null };
};
