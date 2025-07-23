<script context="module" lang="ts">
  import type { Meta } from '@storybook/svelte';
  import Text from './Text.svelte';

  export const meta = {
    title: 'Typography/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
      as: {
        control: { type: 'select' },
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
        description: 'The semantic HTML element to render',
      },
      variant: {
        control: { type: 'select' },
        options: [
          'display',
          'heading-1',
          'heading-2',
          'heading-3',
          'body-large',
          'body-large-strong',
          'body',
          'body-strong',
          'body-small',
          'body-small-strong',
        ],
        description: 'The visual style variant',
      },
      color: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary', 'error', 'success'],
        description: 'Text color variant',
      },
      align: {
        control: { type: 'select' },
        options: ['left', 'center', 'right'],
        description: 'Text alignment',
      },
      truncate: {
        control: { type: 'boolean' },
        description: 'Whether to truncate text with ellipsis',
      },
    },
  } satisfies Meta<Text>;
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Story name="Default">
  <Text>
    Default body text from Figma UI3 design system
  </Text>
</Story>

<Story name="Display">
  <Text variant="display" as="h1">
    Large display size for expressive moments and important announcements
  </Text>
</Story>

<Story name="Headings">
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <Text variant="heading-1" as="h2">
      Large heading (24/32)
    </Text>
    <Text variant="heading-2" as="h3">
      Medium heading (15/25)
    </Text>
    <Text variant="heading-3" as="h4">
      Small heading (13/22)
    </Text>
  </div>
</Story>

<Story name="Body Text">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Text variant="body-large">
      Body Large (13/22) - Our largest body text size, usually saved for elements like multiline text.
    </Text>
    <Text variant="body-large-strong">
      Body Large Strong (13/22) - Emphasized version for important content.
    </Text>
    <Text variant="body">
      Body Medium (11/16) - Our default text size for the majority of UI elements in the editor, such as inputs and buttons.
    </Text>
    <Text variant="body-strong">
      Body Medium Strong (11/16) - Emphasized default text.
    </Text>
    <Text variant="body-small">
      Body Small (9/16) - Our smallest text size, primarily used by small UI elements like avatars and badges
    </Text>
    <Text variant="body-small-strong">
      Body Small Strong (9/16) - Emphasized small text.
    </Text>
  </div>
</Story>

<Story name="Colors">
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Text color="primary">Primary text color (90% opacity)</Text>
    <Text color="secondary">Secondary text color (50% opacity)</Text>
    <Text color="tertiary">Tertiary text color (40% opacity)</Text>
    <Text color="error">Error text color</Text>
    <Text color="success">Success text color</Text>
  </div>
</Story>

<Story name="Alignment">
  <div style="display: flex; flex-direction: column; gap: 12px; width: 400px;">
    <Text align="left" style="width: 100%; background: #f5f5f5; padding: 8px;">
      Left aligned text
    </Text>
    <Text align="center" style="width: 100%; background: #f5f5f5; padding: 8px;">
      Center aligned text
    </Text>
    <Text align="right" style="width: 100%; background: #f5f5f5; padding: 8px;">
      Right aligned text
    </Text>
  </div>
</Story>

<Story name="Truncation">
  <div style="width: 200px; background: #f5f5f5; padding: 8px;">
    <Text truncate>
      This is a very long text that should be truncated with an ellipsis when it exceeds the container width
    </Text>
  </div>
</Story>

<Story name="Typography Scale">
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <div style="padding: 40px 0; border-bottom: 1px solid #e5e5e5;">
      <Text variant="display" as="h1">
        UI3 Typography System
      </Text>
      <Text variant="body" color="secondary" style="margin-top: 8px;">
        UI3 introduces type tokens for body text and headings organized around tshirt sizes — large, medium, small — to allow designers to easily construct multiple levels of hierarchy.
      </Text>
    </div>
    
    <div>
      <Text variant="body-strong" style="margin-bottom: 16px;">Headings</Text>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Text variant="display" as="h1">Display (48/56) - Whyte</Text>
        <Text variant="heading-1" as="h2">Heading Large (24/32) - Inter</Text>
        <Text variant="heading-2" as="h3">Heading Medium (15/25) - Inter</Text>
        <Text variant="heading-3" as="h4">Heading Small (13/22) - Inter</Text>
      </div>
    </div>

    <div>
      <Text variant="body-strong" style="margin-bottom: 16px;">Body Text</Text>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; gap: 24px;">
          <Text variant="body-large">Body Large (13/22)</Text>
          <Text variant="body-large-strong">Body Large Strong</Text>
        </div>
        <div style="display: flex; gap: 24px;">
          <Text variant="body">Body Medium (11/16)</Text>
          <Text variant="body-strong">Body Medium Strong</Text>
        </div>
        <div style="display: flex; gap: 24px;">
          <Text variant="body-small">Body Small (9/16)</Text>
          <Text variant="body-small-strong">Body Small Strong</Text>
        </div>
      </div>
    </div>
  </div>
</Story>

<Story name="Playground" args={{
  variant: 'body',
  color: 'primary',
  align: 'left',
  truncate: false,
}}>
  {#snippet children(args)}
    <Text {...args}>
      Customize this text using the controls panel
    </Text>
  {/snippet}
</Story>