<script lang="ts">
  import './tooltip-link.css';
  import type { Snippet } from 'svelte';
  import Icon from '../icon/icon.svelte';
  import type { IconName } from '../../icons/index.js';
  
  type TooltipLinkVariant = 
    | 'url'
    | 'link' 
    | 'phone' 
    | 'email' 
    | 'page' 
    | 'prototype' 
    | 'frame' 
    | 'file';
  
  
  interface Props {
    /** Type of link */
    variant?: TooltipLinkVariant;
    /** Main label text */
    label?: string;
    /** Value for URL input */
    value?: string;
    /** Placeholder for URL input */
    placeholder?: string;
    /** Primary action text */
    primaryAction?: string;
    /** Secondary action text */
    secondaryAction?: string;
    /** Tertiary action text */
    tertiaryAction?: string;
    /** Whether the tooltip is visible */
    visible?: boolean;
    /** Change handler for URL input */
    onInput?: (value: string) => void;
    /** Click handler for primary action */
    onPrimaryAction?: () => void;
    /** Click handler for secondary action */
    onSecondaryAction?: () => void;
    /** Click handler for tertiary action */
    onTertiaryAction?: () => void;
    /** Custom class names */
    class?: string;
    /** Children (trigger element) */
    children?: Snippet;
  }
  
  const { 
    variant = 'url',
    label,
    value = '',
    placeholder,
    primaryAction,
    secondaryAction,
    tertiaryAction,
    visible,
    onInput,
    onPrimaryAction,
    onSecondaryAction,
    onTertiaryAction,
    class: className,
    children,
    ...restProps
  }: Props = $props();
  
  let isVisible = $state(visible || false);
  let triggerRef: HTMLElement;
  let tooltipRef: HTMLElement;
  let inputValue = $state(value);
  const instanceId = Math.random().toString(36).substring(7);
  
  const classNames = $derived([
    'figma-tooltip-link',
    `figma-tooltip-link--${variant}`,
    isVisible && 'figma-tooltip-link--visible',
    className
  ].filter(Boolean).join(' '));
  
  const isControlled = $derived(typeof visible === 'boolean');
  
  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (isControlled) return;
    isVisible = !isVisible;
  }
  
  function handleClickOutside(e: MouseEvent) {
    if (isControlled) return;
    if (triggerRef && !triggerRef.contains(e.target as Node)) {
      isVisible = false;
    }
  }
  
  function handleKeyDown(e: KeyboardEvent) {
    if (isControlled) return;
    if (e.key === 'Escape') {
      isVisible = false;
    }
  }
  
  function getIconForVariant(variant: TooltipLinkVariant): IconName | undefined {
    switch (variant) {
      case 'link': return 'link-small';
      case 'page': return 'page';
      case 'frame': return 'frame';
      case 'file': return 'folder';
      default: return undefined;
    }
  }
  
  function getDefaultContent() {
    switch (variant) {
      case 'url': return { label: 'Type or paste URL' };
      case 'link': return { label: 'Open google.com', primaryAction: 'Edit' };
      case 'phone': return { label: 'Call (415) 355-0394', primaryAction: 'Edit' };
      case 'email': return { label: 'Copy mail@mail.com', primaryAction: 'Send mail', secondaryAction: 'Edit' };
      case 'page': return { label: 'Go to page', primaryAction: 'Edit' };
      case 'prototype': return { label: 'Open prototype', primaryAction: 'Edit' };
      case 'frame': return { label: 'Go to frame', primaryAction: 'Edit' };
      case 'file': return { label: 'Open file', primaryAction: 'Edit' };
      default: return {};
    }
  }
  
  const defaults = $derived(getDefaultContent());
  const finalLabel = $derived(label || defaults.label);
  const finalPrimaryAction = $derived(primaryAction || defaults.primaryAction);
  const finalSecondaryAction = $derived(secondaryAction || defaults.secondaryAction);
  const icon = $derived(getIconForVariant(variant));
  
  $effect(() => {
    if (typeof visible === 'boolean') {
      isVisible = visible;
    }
  });
  
  $effect(() => {
    if (isVisible && !isControlled) {
      const handleDocumentClick = (e: MouseEvent) => handleClickOutside(e);
      
      // Add a small delay to prevent immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleDocumentClick);
      }, 10);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleDocumentClick);
      };
    }
  });
</script>

<div 
  class="figma-tooltip-link-wrapper"
  bind:this={triggerRef}
  onclick={handleClick}
  onkeydown={handleKeyDown}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
  
  {#if isVisible}
    <div 
      class={classNames}
      bind:this={tooltipRef}
      role="tooltip"
      data-tooltip-type="link"
      data-instance-id={instanceId}
    >
      <div class="figma-tooltip-link__content">
        {#if variant === 'url'}
          <input
            type="text"
            class="figma-tooltip-link__input"
            placeholder={placeholder || 'Type or paste URL'}
            bind:value={inputValue}
            oninput={(e) => onInput?.(e.currentTarget.value)}
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                onPrimaryAction?.();
              }
            }}
          />
        {:else}
          {#if icon}
            <Icon name={icon} size={24} class="figma-tooltip-link__icon" />
          {/if}
          
          {#if finalLabel}
            <span class="figma-tooltip-link__label">{finalLabel}</span>
          {/if}
        {/if}
        
        {#if finalPrimaryAction}
          {#if icon || finalLabel}
            <div class="figma-tooltip-link__separator"></div>
          {/if}
          <button 
            type="button" 
            class="figma-tooltip-link__action figma-tooltip-link__action--primary"
            onclick={onPrimaryAction}
          >
            {finalPrimaryAction}
          </button>
        {/if}
        
        {#if finalSecondaryAction}
          <div class="figma-tooltip-link__separator"></div>
          <button 
            type="button" 
            class="figma-tooltip-link__action figma-tooltip-link__action--secondary"
            onclick={onSecondaryAction}
          >
            {finalSecondaryAction}
          </button>
        {/if}
        
        {#if tertiaryAction}
          <div class="figma-tooltip-link__separator"></div>
          <button 
            type="button" 
            class="figma-tooltip-link__action figma-tooltip-link__action--tertiary"
            onclick={onTertiaryAction}
          >
            {tertiaryAction}
          </button>
        {/if}
      </div>
      
      <svg class="figma-tooltip-link__arrow" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L11.1962 6H0.803848L6 0Z" fill="#1e1e1e"/>
      </svg>
    </div>
  {/if}
</div>