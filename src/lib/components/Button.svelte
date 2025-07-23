<script lang="ts">
  import '../styles/button.css';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface ButtonProps extends HTMLButtonAttributes {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    children?: Snippet;
  }

  let { 
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    children,
    class: className,
    ...restProps
  }: ButtonProps = $props();

  const classes = $derived(
    [
      'figma-button',
      `figma-button--${variant}`,
      `figma-button--${size}`,
      fullWidth && 'figma-button--full-width',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<button 
  class={classes}
  {...restProps}
>
  {@render children?.()}
</button>