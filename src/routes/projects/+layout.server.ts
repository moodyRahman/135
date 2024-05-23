import * as fs from "fs/promises";

type ProjectData = {
  [key: string]: string;
};

export async function load({ params, fetch }) {
  let j = [];

  const out = {};
  const f = await fs.readdir("./static/projects");
  const z = await Promise.all(
    f.map(async (x) => {
      return [x, await fs.readFile(`./static/projects/${x}`, "utf8")];
    })
  );

  z.forEach((e) => {
    out[e[0]] = e[1];
  });

  console.log(out);

  //   const res = await fetch("/api");
  //   const out = await res.json();

  return {
    projects: out satisfies ProjectData,
  };
}
