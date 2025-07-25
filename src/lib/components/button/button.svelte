<script lang="ts">
  import './button.css';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import Icon from '../icon/icon.svelte';
  import type { IconName } from '../../icons/index.js';

  interface ButtonProps extends HTMLButtonAttributes {
    /** Button visual style variant */
    variant?: 'primary' | 'secondary' | 'tertiary';
    /** Button size */
    size?: 'default' | 'large';
    /** Icon to display before the text */
    iconStart?: IconName;
    /** Icon to display after the text */
    iconEnd?: IconName;
    /** Whether the button should take full width of its container */
    fullWidth?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Button content */
    children?: Snippet;
  }

  let { 
    variant = 'primary',
    size = 'default',
    iconStart,
    iconEnd,
    fullWidth = false,
    loading = false,
    disabled = false,
    children,
    class: className,
    ...restProps
  }: ButtonProps = $props();

  // Determine icon size based on button size
  let iconSize: 16 | 24 | undefined = $derived(size === 'large' ? 24 : 16);

  let classes = $derived(
    [
      'figma-button',
      `figma-button--${variant}`,
      `figma-button--${size}`,
      fullWidth && 'figma-button--full-width',
      loading && 'figma-button--loading',
      (iconStart || iconEnd) && 'figma-button--with-icon',
      iconStart && !children && !iconEnd && 'figma-button--icon-only',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<button 
  class={classes}
  disabled={disabled || loading}
  {...restProps}
>
  {#if loading}
    <span class="figma-button__spinner" aria-hidden="true"></span>
  {:else}
    {#if iconStart}
      <Icon name={iconStart} size={iconSize} class="figma-button__icon figma-button__icon--start" />
    {/if}
    
    {#if children}
      <span class="figma-button__text">
        {@render children()}
      </span>
    {/if}
    
    {#if iconEnd}
      <Icon name={iconEnd} size={iconSize} class="figma-button__icon figma-button__icon--end" />
    {/if}
  {/if}
</button>