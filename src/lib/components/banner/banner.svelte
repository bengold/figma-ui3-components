<script lang="ts">
  import './banner.css';
  
  interface Props {
    variant?: 'info' | 'success' | 'warning' | 'error';
    children: any;
  }
  
  let { variant = 'info', children }: Props = $props();
</script>

<div class="banner banner--{variant}">
  {@render children()}
</div>