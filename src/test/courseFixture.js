import topics from '../../content/course/topics.json';
import schedule from '../../content/course/schedule.json';
import { buildCourse, parseFrontMatter } from '../../scripts/course.mjs';

/** Course data as the morning build would produce it on `today`, with these studies written. */
export const makeCourse = (today, written = {}) => buildCourse({
  today,
  topics,
  schedule,
  written: Object.fromEntries(Object.entries(written).map(([slug, text]) => [slug, parseFrontMatter(text)])),
});

export const STUDY_1 = `---
summary: Same salary, very different results after 100 days.
action: money_split
resource: money-map
---
Two people earn the same **₦300,000** a month.

## What wealth really is

- What you keep
- What you own

!> Wealth is what you keep, not what you earn.

Read [the Money Map](/resources/money-map) or <script>alert(1)</script> [bad](javascript:alert(1)).`;

export const STUDY_2 = `---
summary: Knowing isn't doing.
---
Discipline is the daily habit.`;

/** Written but not due until 18 Nov: must never be published early. */
export const STUDY_3 = `---
summary: SECRET FUTURE SUMMARY
---
SECRET FUTURE TEXT`;
