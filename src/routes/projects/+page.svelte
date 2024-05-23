<script>
  // const projects = import.meta.glob("../../../static/projects/*");

  export let data;
  let raw = [];

  console.log(data.projects);

  // const res = fetch("/projects/")
  //   .then((res) => res.json())
  //   .then((t) => (raw = t));
  // for (const modulePath in projects) {
  //   p.push(modulePath);
  // }
</script>

<!-- {#each data.content as proj}
  <h5><a href="/projects/{proj.file}/" class="highlight">{proj.file}</a></h5>
{/each} -->

{#each Object.entries(data.projects) as [k, v]}
  <h5>
    <a class="highlight" href={`./${k.substring(0, k.length - 3)}`}>{k}</a>
  </h5>
{/each}

<h5><a href="./test/" class="highlight">test</a></h5>

<!-- <h5><a href="./1" class="highlight">Project 1</a></h5>
<h5><a href="./3" class="highlight">Project 3</a></h5>
<h5><a href="./4" class="highlight">Project 4</a></h5>
<h5><a href="./5" class="highlight">Project 5</a></h5>
<h5><a href="./6" class="highlight">Project 6</a></h5>
<h5><a href="./7" class="highlight">Project 7</a></h5>
<h5><a href="../" class="highlight">../</a></h5>
-->
<!-- 
<h5><a href="#" class="highlight">Project 1</a></h5>
<h5><a href="#" class="highlight">Project 2</a></h5>
<h5><a href="#" class="highlight">Project 3</a></h5>
<h5><a href="#" class="highlight">Project 4</a></h5>
<h5><a href="#" class="highlight">Project 5</a></h5>
<h5><a href="#" class="highlight">Project 6</a></h5>
<h5><a href="#" class="highlight">Project 7</a></h5> -->
