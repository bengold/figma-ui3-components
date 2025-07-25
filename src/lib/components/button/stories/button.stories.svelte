<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '$lib/components/button/button.svelte';

  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary'],
        description: 'Button visual style variant',
        table: {
          defaultValue: { summary: 'primary' }
        }
      },
      size: {
        control: { type: 'select' },
        options: ['default', 'large'],
        description: 'Button size',
        table: {
          defaultValue: { summary: 'default' }
        }
      },
      disabled: {
        control: { type: 'boolean' },
        description: 'Disabled state',
        table: {
          defaultValue: { summary: "false" }
        }
      },
      loading: {
        control: { type: 'boolean' },
        description: 'Loading state',
        table: {
          defaultValue: { summary: "false" }
        }
      },
      fullWidth: {
        control: { type: 'boolean' },
        description: 'Full width button',
        table: {
          defaultValue: { summary: "false" }
        }
      },
      iconStart: {
        control: { type: 'select' },
        options: [undefined, 'star', 'plus', 'check', 'close'],
        description: 'Icon before text',
      },
      iconEnd: {
        control: { type: 'select' },
        options: [undefined, 'chevron-down', 'chevron-right', 'arrow'],
        description: 'Icon after text',
      },
    },
  });
</script>

<script>
  import Text from '$lib/components/text/text.svelte';
  export let args;
</script>

<!-- Default story -->
<Story name="Default">
  <Button>Button</Button>
</Story>

<!-- Primary Button States -->
<Story name="Primary States">
  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Primary Button - Default Size</Text>
    <div class="button-story-grid">
      <div class="button-story-item">
        <Button variant="primary" size="default">Button</Button>
        <Text variant="body-small" color="secondary">Default</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="default" class="button-demo-focused">Button</Button>
        <Text variant="body-small" color="secondary">Focused</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="default" class="button-demo-active">Button</Button>
        <Text variant="body-small" color="secondary">Active</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="default" disabled>Button</Button>
        <Text variant="body-small" color="secondary">Disabled</Text>
      </div>
    </div>
  </div>

  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Primary Button - Large Size</Text>
    <div class="button-story-grid">
      <div class="button-story-item">
        <Button variant="primary" size="large">Button</Button>
        <Text variant="body-small" color="secondary">Default</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="large" class="button-demo-focused">Button</Button>
        <Text variant="body-small" color="secondary">Focused</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="large" class="button-demo-active">Button</Button>
        <Text variant="body-small" color="secondary">Active</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="large" disabled>Button</Button>
        <Text variant="body-small" color="secondary">Disabled</Text>
      </div>
    </div>
  </div>
</Story>

<!-- Buttons with Icons -->
<Story name="With Icons">
  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Default Size with Icons</Text>
    <div class="button-story-grid">
      <div class="button-story-item">
        <Button variant="primary" size="default" iconStart="star">Button</Button>
        <Text variant="body-small" color="secondary">Icon Start</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="default" iconEnd="chevron-down">Button</Button>
        <Text variant="body-small" color="secondary">Icon End</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="default" iconStart="plus" iconEnd="chevron-right">Button</Button>
        <Text variant="body-small" color="secondary">Both Icons</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="default" iconStart="close" />
        <Text variant="body-small" color="secondary">Icon Only</Text>
      </div>
    </div>
  </div>

  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Large Size with Icons</Text>
    <div class="button-story-grid">
      <div class="button-story-item">
        <Button variant="primary" size="large" iconStart="star">Button</Button>
        <Text variant="body-small" color="secondary">Icon Start</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="large" iconEnd="chevron-down">Button</Button>
        <Text variant="body-small" color="secondary">Icon End</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="large" iconStart="plus" iconEnd="chevron-right">Button</Button>
        <Text variant="body-small" color="secondary">Both Icons</Text>
      </div>
      <div class="button-story-item">
        <Button variant="primary" size="large" iconStart="close" />
        <Text variant="body-small" color="secondary">Icon Only</Text>
      </div>
    </div>
  </div>
</Story>

<!-- All Variants -->
<Story name="All Variants">
  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Primary Variant</Text>
    <div class="button-story-row">
      <Button variant="primary" size="default">Default</Button>
      <Button variant="primary" size="large">Large</Button>
      <Button variant="primary" size="default" iconStart="star">With Icon</Button>
      <Button variant="primary" size="default" disabled>Disabled</Button>
      <Button variant="primary" size="default" loading>Loading</Button>
    </div>
  </div>

  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Secondary Variant</Text>
    <div class="button-story-row">
      <Button variant="secondary" size="default">Default</Button>
      <Button variant="secondary" size="large">Large</Button>
      <Button variant="secondary" size="default" iconStart="star">With Icon</Button>
      <Button variant="secondary" size="default" disabled>Disabled</Button>
      <Button variant="secondary" size="default" loading>Loading</Button>
    </div>
  </div>

  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Tertiary Variant</Text>
    <div class="button-story-row">
      <Button variant="tertiary" size="default">Default</Button>
      <Button variant="tertiary" size="large">Large</Button>
      <Button variant="tertiary" size="default" iconStart="star">With Icon</Button>
      <Button variant="tertiary" size="default" disabled>Disabled</Button>
      <Button variant="tertiary" size="default" loading>Loading</Button>
    </div>
  </div>
</Story>

<!-- Icon Combinations -->
<Story name="Icon Combinations">
  <div class="button-story-grid-large">
    <div class="button-story-item">
      <Button variant="primary" iconStart="plus">Add Item</Button>
      <Text variant="body-small" color="secondary">Add action</Text>
    </div>
    <div class="button-story-item">
      <Button variant="primary" iconStart="check">Save</Button>
      <Text variant="body-small" color="secondary">Confirm action</Text>
    </div>
    <div class="button-story-item">
      <Button variant="secondary" iconStart="close">Cancel</Button>
      <Text variant="body-small" color="secondary">Cancel action</Text>
    </div>
    <div class="button-story-item">
      <Button variant="primary" iconEnd="chevron-down">Options</Button>
      <Text variant="body-small" color="secondary">Dropdown</Text>
    </div>
    <div class="button-story-item">
      <Button variant="primary" iconEnd="chevron-right">Next</Button>
      <Text variant="body-small" color="secondary">Navigation</Text>
    </div>
    <div class="button-story-item">
      <Button variant="tertiary" iconStart="refresh">Refresh</Button>
      <Text variant="body-small" color="secondary">Refresh action</Text>
    </div>
  </div>
</Story>

<!-- Loading States -->
<Story name="Loading States">
  <div class="button-story-row">
    <Button variant="primary" loading>Loading...</Button>
    <Button variant="secondary" loading>Loading...</Button>
    <Button variant="tertiary" loading>Loading...</Button>
    <Button variant="primary" size="large" loading>Loading...</Button>
  </div>
</Story>

<!-- Full Width -->
<Story name="Full Width">
  <div class="button-story-stack" style="max-width: 300px;">
    <Button variant="primary" fullWidth>Full Width Primary</Button>
    <Button variant="secondary" fullWidth>Full Width Secondary</Button>
    <Button variant="tertiary" fullWidth>Full Width Tertiary</Button>
    <Button variant="primary" fullWidth iconStart="star">With Icon</Button>
  </div>
</Story>

<!-- Interactive Demo -->
<Story name="Interactive Demo">
  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Click to see states</Text>
    <div class="button-story-row">
      <Button variant="primary">Click me</Button>
      <Button variant="primary" iconStart="star">Favorite</Button>
      <Button variant="primary" iconEnd="chevron-down">Menu</Button>
    </div>
  </div>
</Story>

<!-- Playground -->
<Story name="Playground" args={{
  variant: 'primary',
  size: 'default',
  disabled: false,
  loading: false,
  fullWidth: false,
  iconStart: undefined,
  iconEnd: undefined,
}}>
  <div class="button-playground">
    <Button {...args}>
      {#if args.loading}
        Loading...
      {:else}
        Button Text
      {/if}
    </Button>
  </div>
</Story>