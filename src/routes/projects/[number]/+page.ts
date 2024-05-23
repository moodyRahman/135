export const load = async ({ params, fetch }) => {
  // const res = await fetch(`/api`);
  // const content = await res.json();

  // const here = content.content.find((x) => x.file === params.number);
  // return {
  //   number: params.number,
  //   content: here.content,
  // };

  return { slug: params.number };
};
