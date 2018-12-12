const truncate = (text, limit) =>
  typeof text === 'string' && text.length > limit
    ? `${text.slice(0, limit)}…`
    : text;

export default truncate;
