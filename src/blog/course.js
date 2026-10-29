import course from '../content/course.generated.json';

/**
 * Financial Intelligence, the free money class, as the blog shows it today.
 * Built each morning by scripts/course.mjs: only studies whose day has come
 * (and that have been written) are in here, so the blog grows one study a day
 * alongside the social series. Topics run over several days; the blog's home
 * page always opens on the latest study.
 */
export const COURSE = course;

const LONG = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
const SHORT = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });
/** "Monday 16 November" — dates are plain YYYY-MM-DD days, so format them in UTC. */
export const longDate = (iso) => LONG.format(new Date(`${iso}T00:00:00Z`)).replace(',', '');
export const shortDate = (iso) => SHORT.format(new Date(`${iso}T00:00:00Z`));

export const studies = () => course.studies;
export const getStudy = (slug) => course.studies.find((s) => s.slug === slug) || null;
export const getTopic = (no) => course.topics.find((t) => t.no === no) || null;

/** The study the blog opens on: the newest one released. */
export const latestStudy = () => course.studies[course.studies.length - 1] || null;

/** The newest studies first, after the latest (for "earlier in the class"). */
export const earlierStudies = (count = 4) => course.studies.slice(0, -1).slice(-count).reverse();

/** Previous released study, and the next one: released if it is, otherwise a teaser with its date. */
export const studyNeighbours = (slug) => {
  const i = course.studies.findIndex((s) => s.slug === slug);
  const prev = i > 0 ? course.studies[i - 1] : null;
  const nextReleased = i >= 0 && i < course.studies.length - 1 ? course.studies[i + 1] : null;
  return { prev, next: nextReleased, upcoming: nextReleased ? null : course.next };
};

/** "Topic 3 · Study 2 of 10" */
export const studyPosition = (study) => {
  const topic = getTopic(study.topic);
  const n = topic ? topic.released.findIndex((s) => s.slug === study.slug) + 1 : 0;
  return { topic, n, of: topic?.study_count || 0 };
};

export const hasStarted = () => course.studies.length > 0;
