<script lang="ts">
  import './badge.css';
  import Icon from '../icon/icon.svelte';
  import type { IconName } from '../../icons/index.js';
  
  type BadgeVariant = 
    | 'default'
    | 'brand'
    | 'component'
    | 'danger'
    | 'feedback'
    | 'figjam'
    | 'invert'
    | 'selected'
    | 'success'
    | 'variable'
    | 'variable-selected'
    | 'warn'
    | 'merged'
    | 'archived'
    | 'menu';
  
  interface Props {
    variant?: BadgeVariant;
    strong?: boolean;
    size?: 'small' | 'large';
    iconStart?: IconName;
    iconEnd?: IconName;
    children: string;
  }
  
  const { 
    variant = 'default',
    strong = false,
    size = 'small',
    iconStart,
    iconEnd,
    children
  }: Props = $props();
  
  const classNames = $derived([
    'figma-badge',
    `figma-badge--${variant}`,
    `figma-badge--${size}`,
    strong ? 'figma-badge--strong' : ''
  ].filter(Boolean).join(' '));
</script>

<span class={classNames}>
  {#if iconStart}
    <span class="figma-badge__icon">
      <Icon name={iconStart} size={16} />
    </span>
  {/if}
  
  <span class="figma-badge__text">{children}</span>
  
  {#if iconEnd}
    <span class="figma-badge__icon">
      <Icon name={iconEnd} size={16} />
    </span>
  {/if}
</span>