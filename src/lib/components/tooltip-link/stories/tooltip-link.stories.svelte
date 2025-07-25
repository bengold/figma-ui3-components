<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TooltipLink from '../tooltip-link.svelte';

  const { Story } = defineMeta({
    title: 'Components/TooltipLink',
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['url', 'link', 'phone', 'email', 'page', 'prototype', 'frame', 'file'],
        description: 'Type of link tooltip'
      },
      label: {
        control: { type: 'text' },
        description: 'Main label text'
      },
      primaryAction: {
        control: { type: 'text' },
        description: 'Primary action button text'
      },
      secondaryAction: {
        control: { type: 'text' },
        description: 'Secondary action button text'
      },
      tertiaryAction: {
        control: { type: 'text' },
        description: 'Tertiary action button text'
      },
      value: {
        control: { type: 'text' },
        description: 'Value for URL input'
      },
      placeholder: {
        control: { type: 'text' },
        description: 'Placeholder for URL input'
      },
      visible: {
        control: { type: 'boolean' },
        description: 'Whether the tooltip is visible'
      }
    },
    parameters: {
      docs: {
        description: {
          component: 'TooltipLink component for displaying link-related actions with multiple buttons in Figma UI3. Appears on click, not hover.'
        }
      },
      layout: 'centered'
    }
  });
</script>

<Story name="URL Variant">
  <div style="padding: 48px;">
    <TooltipLink 
      variant="url" 
           visible={true}
      onInput={(value) => console.log('URL input:', value)}
      onPrimaryAction={() => console.log('Enter pressed')}
    />
  </div>
</Story>

<Story name="Link Variant">
  <div style="padding: 48px;">
    <TooltipLink variant="link" placement="bottom">
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Web Link
      </button>
    </TooltipLink>
  </div>
</Story>

<Story name="Phone Variant">
  <div style="padding: 48px;">
    <TooltipLink variant="phone" placement="bottom">
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Phone Link</button>
    </TooltipLink>
  </div>
</Story>

<Story name="Email Variant">
  <div style="padding: 48px;">
    <TooltipLink variant="email" placement="bottom">
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Email Link</button>
    </TooltipLink>
  </div>
</Story>

<Story name="Page Variant">
  <div style="padding: 48px;">
    <TooltipLink variant="page" placement="bottom">
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Page Link</button>
    </TooltipLink>
  </div>
</Story>

<Story name="Prototype Variant">
  <div style="padding: 48px;">
    <TooltipLink variant="prototype" placement="bottom">
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Prototype Link</button>
    </TooltipLink>
  </div>
</Story>

<Story name="Frame Variant">
  <div style="padding: 48px;">
    <TooltipLink variant="frame" placement="bottom">
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Frame Link</button>
    </TooltipLink>
  </div>
</Story>

<Story name="File Variant">
  <div style="padding: 48px;">
    <TooltipLink variant="file" placement="bottom">
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">File Link</button>
    </TooltipLink>
  </div>
</Story>

<Story name="Custom Actions">
  <div style="padding: 48px;">
    <TooltipLink 
      variant="link"
      label="Custom link tooltip"
      primaryAction="Open"
      secondaryAction="Copy"
      tertiaryAction="Share"
                onPrimaryAction={() => console.log('Primary action clicked')}
      onSecondaryAction={() => console.log('Secondary action clicked')}
      onTertiaryAction={() => console.log('Tertiary action clicked')}
    >
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Custom Actions</button>
    </TooltipLink>
  </div>
</Story>


<Story name="Always Visible">
  <div style="padding: 48px;">
    <TooltipLink 
      variant="email"
      visible={true}
         >
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Always visible tooltip</button>
    </TooltipLink>
  </div>
</Story>


<Story name="Playground">
  <div style="padding: 48px;">
    <TooltipLink 
      variant="link"
      label="Open link"
      primaryAction="Edit"
         >
      <button style="padding: 8px 16px; background: #007be5; color: white; border: none; border-radius: 4px; cursor: pointer;">Click to see tooltip</button>
    </TooltipLink>
  </div>
</Story>

<style>
  :global(.docs-story, .sb-story) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>