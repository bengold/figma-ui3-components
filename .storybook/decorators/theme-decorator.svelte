<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    children: Snippet;
  }
  
  const { children }: Props = $props();
</script>

<div class="figma-light" style="padding: 1rem;">
  {@render children()}
</div>