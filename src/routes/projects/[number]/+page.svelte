<script>
  import { marked } from "marked";
  export let data;

  data.projects;
</script>

{data.slug}

{@html marked(data.projects[data.slug + ".md"])}

<br /><br />

<!-- {data.files} -->
