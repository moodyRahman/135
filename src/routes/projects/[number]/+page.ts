export const load = async ({ params, fetch }) => {
  const res = await fetch(`../1.md`);
  const content = await res.text();

  return {
    number: params.number,
    content: content,
  };
};
