<script lang="ts">
  import './icon.css';
  import { icons, extractSvgPath, type IconName } from '../icons/index.js';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<SVGSVGElement> {
    /** Icon name from available icons */
    name: IconName;
    /** Icon size */
    size?: 16 | 24 | 32;
    /** Icon color - uses currentColor by default */
    color?: 'current' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'white';
    /** Custom class names */
    class?: string;
  }

  const { 
    name,
    size = 24,
    color = 'current',
    class: className,
    ...restProps
  }: Props = $props();

  // Get SVG content at build time
  let svgContent = $derived(
    icons[name] ? extractSvgPath(icons[name]) : ''
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
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
>
  {@html svgContent}
</svg>