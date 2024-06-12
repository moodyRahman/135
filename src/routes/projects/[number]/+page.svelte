<script>
  import { marked } from "marked";
  export let data;

  data.projects;
</script>

{@html marked(data.projects[data.slug + ".md"])}

<h5>
  <a href="../" class="highlight">../</a>
</h5>

<!-- {data.files} -->

<style>
  :global(pre) {
    background-color: #666661;
    padding: 5px;
    color: #cdcdc1;
    border-radius: 5px;
  }
</style>
