<script context="module" lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Banner from '../banner.svelte';
</script>

<Meta
  title="Components/Banner"
  component={Banner}
  argTypes={{
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
  }}
/>

<Template let:args>
  <Banner {...args}>
    {#if args.variant === 'success'}
      Operation completed successfully!
    {:else if args.variant === 'warning'}
      Please review before proceeding.
    {:else if args.variant === 'error'}
      An error occurred. Please try again.
    {:else}
      This is an informational banner message.
    {/if}
  </Banner>
</Template>

<Story
  name="Default"
  args={{
    variant: 'info',
  }}
/>

<Story
  name="Success"
  args={{
    variant: 'success',
  }}
/>

<Story
  name="Warning"
  args={{
    variant: 'warning',
  }}
/>

<Story
  name="Error"
  args={{
    variant: 'error',
  }}
/>
