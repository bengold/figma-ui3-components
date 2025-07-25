<script lang="ts">
  import './tooltip.css';
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';
  
  type TooltipPlacement = 
    | 'top' 
    | 'top-start' 
    | 'top-end' 
    | 'bottom' 
    | 'bottom-start' 
    | 'bottom-end' 
    | 'left' 
    | 'right';
  
  interface Props {
    /** The content to display in the tooltip */
    content: string;
    /** Optional keyboard shortcut to display */
    shortcut?: string;
    /** Placement of the tooltip relative to the trigger */
    placement?: TooltipPlacement;
    /** Whether the tooltip is visible */
    visible?: boolean;
    /** Delay before showing tooltip on hover (ms) */
    showDelay?: number;
    /** Delay before hiding tooltip on mouse leave (ms) */
    hideDelay?: number;
    /** Custom class names */
    class?: string;
    /** Children (trigger element) */
    children?: Snippet;
  }
  
  const { 
    content,
    shortcut,
    placement = 'top',
    visible,
    showDelay = 500,
    hideDelay = 0,
    class: className,
    children,
    ...restProps
  }: Props = $props();
  
  let isVisible = $state(visible || false);
  let triggerRef: HTMLElement;
  let tooltipRef: HTMLElement;
  let showTimeout: ReturnType<typeof setTimeout>;
  let hideTimeout: ReturnType<typeof setTimeout>;
  
  const classNames = $derived([
    'figma-tooltip',
    `figma-tooltip--${placement}`,
    isVisible && 'figma-tooltip--visible',
    className
  ].filter(Boolean).join(' '));
  
  const isControlled = $derived(typeof visible === 'boolean');
  
  function handleMouseEnter() {
    if (isControlled) return; // Don't override controlled visibility
    clearTimeout(hideTimeout);
    showTimeout = setTimeout(() => {
      isVisible = true;
    }, showDelay);
  }
  
  function handleMouseLeave() {
    if (isControlled) return; // Don't override controlled visibility
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(() => {
      isVisible = false;
    }, hideDelay);
  }
  
  function handleFocus() {
    if (isControlled) return; // Don't override controlled visibility
    clearTimeout(hideTimeout);
    isVisible = true;
  }
  
  function handleBlur() {
    if (isControlled) return; // Don't override controlled visibility
    clearTimeout(showTimeout);
    isVisible = false;
  }
  
  onMount(() => {
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  });
  
  $effect(() => {
    if (typeof visible === 'boolean') {
      isVisible = visible;
    }
  });
</script>

<div 
  class="figma-tooltip-wrapper"
  bind:this={triggerRef}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  onfocus={handleFocus}
  onblur={handleBlur}
  {...restProps}
>
  {#if children}
    <div class="figma-tooltip-trigger">
      {@render children()}
    </div>
  {/if}
  
  {#if isVisible && content}
    <div 
      class={classNames}
      bind:this={tooltipRef}
      role="tooltip"
    >
      <div class="figma-tooltip__content">
        <span class="figma-tooltip__text">{content}</span>
        {#if shortcut}
          <span class="figma-tooltip__shortcut">{shortcut}</span>
        {/if}
      </div>
      <svg class="figma-tooltip__arrow" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L11.1962 6H0.803848L6 0Z" fill="#1e1e1e"/>
      </svg>
    </div>
  {/if}
</div>