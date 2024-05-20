<script>
  import { marked } from "marked";
  export let data;
</script>

{@html marked(data.content)}
