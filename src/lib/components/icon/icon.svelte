<script lang="ts">
  import './icon.css';
  import { getIcon, extractSvgContent, type IconName } from '../../icons/index.js';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<SVGSVGElement> {
    /** Icon name from available icons */
    name: IconName;
    /** Icon size */
    size?: 16 | 24;
    /** Icon color - uses currentColor by default */
    color?: 'current' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'white';
    /** Custom class names */
    class?: string;
  }

  const { 
    name,
    size = 16,
    color = 'current',
    class: className,
    ...restProps
  }: Props = $props();

  // Get the icon SVG for the requested size
  // If the exact size isn't available, fall back to 16px
  let iconSvg = $derived(
    getIcon(name, size) || getIcon(name, 16) || ''
  );

  // Extract viewBox and paths from the SVG
  let { viewBox, paths } = $derived(
    extractSvgContent(iconSvg)
  );

  let classes = $derived([
    'figma-icon',
    `figma-icon--size-${size}`,
    `figma-icon--color-${color}`,
    className
  ].filter(Boolean).join(' '));
</script>

<svg 
  class={classes}
  width={size} 
  height={size} 
  viewBox={viewBox} 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
>
  {@html paths}
</svg>