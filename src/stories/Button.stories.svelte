<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '$lib/components/Button.svelte';

  const { Story } = defineMeta({
    title: 'Figma UI3/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary'],
        description: 'Button style variant',
        table: {
          defaultValue: { summary: 'primary' }
        }
      },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        description: 'Button size',
        table: {
          defaultValue: { summary: 'medium' }
        }
      },
      fullWidth: {
        control: { type: 'boolean' },
        description: 'Whether button should take full width',
        table: {
          defaultValue: { summary: false }
        }
      },
      disabled: {
        control: { type: 'boolean' },
        description: 'Whether button is disabled',
        table: {
          defaultValue: { summary: false }
        }
      },
      onclick: {
        action: 'clicked',
        description: 'Click event handler'
      }
    },
  });
</script>

<script>
  import Icon from '$lib/components/Icon.svelte';
  import Text from '$lib/components/Text.svelte';
  import './button-demo.css';
</script>

<!-- Default story -->
<Story name="Default">
  <Button>Button</Button>
</Story>

<!-- All variants -->
<Story name="Button Variants">
  <div class="button-story-row">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
  </div>
</Story>

<!-- All sizes -->
<Story name="Button Sizes">
  <div class="button-story-row">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
</Story>

<!-- Disabled states -->
<Story name="Disabled States">
  <div class="button-story-row">
    <Button variant="primary" disabled>Primary</Button>
    <Button variant="secondary" disabled>Secondary</Button>
    <Button variant="tertiary" disabled>Tertiary</Button>
  </div>
</Story>

<!-- With icons -->
<Story name="With Icons">
  <div class="button-story-stack">
    <div class="button-story-row">
      <Button>
        <Icon name="plus" size={16} color="white" />
        Add Item
      </Button>
      <Button variant="secondary">
        <Icon name="search" size={16} />
        Search
      </Button>
      <Button variant="tertiary">
        Settings
        <Icon name="chevron-down" size={16} />
      </Button>
    </div>
    <div class="button-story-row">
      <Button size="small">
        <Icon name="check" size={16} color="white" />
        Save
      </Button>
      <Button size="large" variant="secondary">
        <Icon name="close" size={16} />
        Cancel
      </Button>
    </div>
  </div>
</Story>

<!-- Icon only buttons -->
<Story name="Icon Only">
  <div class="button-story-row">
    <Button size="small" style="padding: 4px;">
      <Icon name="close" size={16} color="white" />
    </Button>
    <Button variant="secondary" style="padding: 8px;">
      <Icon name="more" size={16} />
    </Button>
    <Button variant="tertiary" size="large" style="padding: 8px;">
      <Icon name="settings" size={24} />
    </Button>
  </div>
</Story>

<!-- Full width -->
<Story name="Full Width">
  <div style="max-width: 400px;">
    <div class="button-story-stack">
      <Button fullWidth>Primary Full Width</Button>
      <Button variant="secondary" fullWidth>Secondary Full Width</Button>
      <Button variant="tertiary" fullWidth>Tertiary Full Width</Button>
    </div>
  </div>
</Story>

<!-- Button groups -->
<Story name="Button Groups">
  <div class="button-story-stack">
    <div class="button-group">
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
    <div class="button-group">
      <Button variant="secondary" size="small">Previous</Button>
      <Button variant="secondary" size="small">1</Button>
      <Button variant="primary" size="small">2</Button>
      <Button variant="secondary" size="small">3</Button>
      <Button variant="secondary" size="small">Next</Button>
    </div>
    <div class="button-group-vertical">
      <Button variant="secondary" fullWidth>Option 1</Button>
      <Button variant="secondary" fullWidth>Option 2</Button>
      <Button variant="secondary" fullWidth>Option 3</Button>
    </div>
  </div>
</Story>

<!-- Real world examples -->
<Story name="Real World Examples">
  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Form Actions</Text>
    <div class="button-story-row">
      <Button>
        <Icon name="check" size={16} color="white" />
        Submit Form
      </Button>
      <Button variant="secondary">
        Save Draft
      </Button>
      <Button variant="tertiary">
        Cancel
      </Button>
    </div>
  </div>

  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Dialog Actions</Text>
    <div class="button-dialog-footer">
      <Button variant="tertiary">Learn More</Button>
      <div class="button-group">
        <Button variant="secondary">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  </div>

  <div class="button-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Navigation</Text>
    <div class="button-story-row">
      <Button variant="tertiary" size="small">
        <Icon name="chevron-left" size={16} />
        Back
      </Button>
      <Button variant="primary" size="small">
        Next
        <Icon name="chevron-right" size={16} color="white" />
      </Button>
    </div>
  </div>
</Story>

<!-- Playground -->
<Story name="Playground" args={{
  variant: 'primary',
  size: 'medium',
  fullWidth: false,
  disabled: false,
}}>
  {#snippet children(args)}
    <Button {...args}>
      Playground Button
    </Button>
  {/snippet}
</Story>