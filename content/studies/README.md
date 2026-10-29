# Financial Intelligence studies

One file per weekday study, named after its slug in `content/course/schedule.json`
(for example `your-salary-is-not-your-wealth.md`). A study goes live on the blog on
the morning of its scheduled date, and only once its file exists here. Nothing in
this folder reaches the website before its day (see `scripts/course.mjs`).

```markdown
---
title: Your salary is not your wealth
summary: Same salary, very different results after 100 days. Wealth is what you keep.
action: money_split
resource: money-map
---

Opening paragraph…

## A heading

- a point
- another point

1. a step
2. another step

> A quote.

!> The one idea to remember (shown as a highlighted key idea).

Inline: **bold**, *italic*, [a link](/resources/money-map).
```

Front matter:

- `title`: optional. Defaults to the title in the schedule; keep them the same as the social post.
- `summary`: one or two sentences, shown under the title and in link previews.
- `action`: which Wealth Builder call to action closes the study. One of the keys of
  `ACTIONS` in `src/blog/posts.js` (`money_split`, `log_expense`, `emergency_fund`,
  `savings`, `locked_savings`, `statements`). Defaults to `money_split`.
- `resource`: optional. The `id` of a free download in `src/content/resources.js` to offer.

Rules for the class:

- What we promise is what we give: every study belongs to one of the 24 topics in
  `content/course/topics.json`, in that order.
- Plain English, naira examples, everyday names (Esther, Michael, Mercy).
- Don't name Ponzi platforms; describe the pattern.
- Every study is approved before its file is added here.
