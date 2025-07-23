<script lang="ts">
  import './button.css';
  import Text from '$lib/components/Text.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import type { IconName } from '$lib/icons/index.js';

  interface Props {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Icon to show before the label */
    iconBefore?: IconName;
    /** Icon to show after the label */
    iconAfter?: IconName;
    /** The onclick event handler */
    onclick?: () => void;
  }

  const { 
    primary = false, 
    backgroundColor, 
    size = 'medium', 
    label, 
    iconBefore,
    iconAfter,
    ...props 
  }: Props = $props();
  
  let mode = $derived(primary ? 'storybook-button--primary' : 'storybook-button--secondary');
  let style = $derived(backgroundColor ? `background-color: ${backgroundColor}` : '');
  
  let textVariant = $derived(
    size === 'small' ? 'body-small' : 
    size === 'large' ? 'body-large' : 
    'body'
  );
  
  let iconSize = $derived(size === 'large' ? 24 : 16);
</script>

<button
  type="button"
  class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
  {style}
  {...props}
>
  {#if iconBefore}
    <Icon name={iconBefore} size={iconSize} color="current" />
  {/if}
  <Text variant={textVariant} as="span" color="current">
    {label}
  </Text>
  {#if iconAfter}
    <Icon name={iconAfter} size={iconSize} color="current" />
  {/if}
</button>
