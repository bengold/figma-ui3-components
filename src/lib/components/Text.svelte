<script lang="ts">
  import './text.css';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    /** The semantic HTML element to render */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    /** The visual style variant */
    variant?: 'display' | 'heading-1' | 'heading-2' | 'heading-3' | 
              'body-large' | 'body-large-strong' | 
              'body' | 'body-strong' | 
              'body-small' | 'body-small-strong';
    /** Text color variant */
    color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Whether to truncate text with ellipsis */
    truncate?: boolean;
    /** Custom class names */
    class?: string;
  }

  const { 
    as = 'p',
    variant = 'body',
    color = 'primary',
    align = 'left',
    truncate = false,
    class: className,
    children,
    ...restProps
  }: Props = $props();
  
  let classes = $derived([
    'figma-text',
    `figma-text--${variant}`,
    `figma-text--color-${color}`,
    `figma-text--align-${align}`,
    truncate && 'figma-text--truncate',
    className
  ].filter(Boolean).join(' '));
</script>

{#if as === 'h1'}
  <h1 class={classes} {...restProps}>
    {@render children?.()}
  </h1>
{:else if as === 'h2'}
  <h2 class={classes} {...restProps}>
    {@render children?.()}
  </h2>
{:else if as === 'h3'}
  <h3 class={classes} {...restProps}>
    {@render children?.()}
  </h3>
{:else if as === 'h4'}
  <h4 class={classes} {...restProps}>
    {@render children?.()}
  </h4>
{:else if as === 'h5'}
  <h5 class={classes} {...restProps}>
    {@render children?.()}
  </h5>
{:else if as === 'h6'}
  <h6 class={classes} {...restProps}>
    {@render children?.()}
  </h6>
{:else if as === 'span'}
  <span class={classes} {...restProps}>
    {@render children?.()}
  </span>
{:else if as === 'div'}
  <div class={classes} {...restProps}>
    {@render children?.()}
  </div>
{:else}
  <p class={classes} {...restProps}>
    {@render children?.()}
  </p>
{/if}