import React from 'react';

/**
 * Inline Markdown for study text: **bold**, *italic* and [label](url).
 * Anything else is plain text (React escapes it), so study files can't inject HTML.
 */
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;

export const Inline = ({ text }) => (
  <>
    {String(text).split(TOKEN).filter(Boolean).map((part, i) => {
      if (part.startsWith('**')) return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      if (part.startsWith('[')) {
        const m = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
        const href = m[2];
        const internal = href.startsWith('/');
        const safe = internal || /^https:\/\//.test(href);
        if (!safe) return <span key={i}>{m[1]}</span>;
        return (
          <a key={i} href={href} className="font-semibold text-cyan-700 underline underline-offset-2 hover:text-cyan-900"
            {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
            {m[1]}
          </a>
        );
      }
      if (part.startsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
      return <React.Fragment key={i}>{part}</React.Fragment>;
    })}
  </>
);

export default Inline;
