<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Text from '../text.svelte';

  const { Story } = defineMeta({
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
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
          'body-small-strong'
        ],
        description: 'The visual style variant',
        table: {
          defaultValue: { summary: 'body' }
        }
      },
      color: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary', 'error', 'success'],
        description: 'Text color variant',
        table: {
          defaultValue: { summary: 'primary' }
        }
      },
      align: {
        control: { type: 'select' },
        options: ['left', 'center', 'right'],
        description: 'Text alignment',
        table: {
          defaultValue: { summary: 'left' }
        }
      },
      truncate: {
        control: { type: 'boolean' },
        description: 'Whether to truncate text with ellipsis',
        table: {
          defaultValue: { summary: 'false' }
        }
      },
      as: {
        control: { type: 'select' },
        options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        description: 'HTML element to render as',
        table: {
          defaultValue: { summary: 'p' }
        }
      }
    },
    parameters: {
      layout: 'centered'
    }
  });
</script>

<Story name="Default" args={{ children: 'Default body text from Figma UI3 design system' }} />

<Story name="Display Heading" args={{ 
  children: 'Large display size for expressive moments and important announcements',
  variant: 'display',
  as: 'h1'
}} />

<Story name="Headings Showcase">
  <div class="text-story-stack">
    <Text variant="display" as="h1">Display Heading (48/56)</Text>
    <Text variant="heading-1" as="h2">Large Heading (24/32)</Text>
    <Text variant="heading-2" as="h3">Medium Heading (15/25)</Text>
    <Text variant="heading-3" as="h4">Small Heading (13/22)</Text>
  </div>
</Story>

<Story name="Body Text Variants">
  <div class="text-story-stack">
    <div class="text-story-row">
      <Text variant="body-large">Body Large (13/22) - Largest body text</Text>
      <Text variant="body-large-strong">Body Large Strong (13/22) - Emphasized</Text>
    </div>
    <div class="text-story-row">
      <Text variant="body">Body Medium (11/16) - Default UI text</Text>
      <Text variant="body-strong">Body Medium Strong (11/16) - Emphasized</Text>
    </div>
    <div class="text-story-row">
      <Text variant="body-small">Body Small (9/14) - Smallest body text</Text>
      <Text variant="body-small-strong">Body Small Strong (9/14) - Emphasized</Text>
    </div>
  </div>
</Story>

<Story name="Color Variants">
  <div class="text-story-stack">
    <Text color="primary">Primary text (90% opacity)</Text>
    <Text color="secondary">Secondary text (50% opacity)</Text>
    <Text color="tertiary">Tertiary text (30% opacity)</Text>
    <Text color="error">Error text color</Text>
    <Text color="success">Success text color</Text>
  </div>
</Story>

<Story name="Text Alignment">
  <div class="text-story-stack" style="width: 100%;">
    <div class="text-story-box">
      <Text align="left">Left aligned text</Text>
    </div>
    <div class="text-story-box">
      <Text align="center">Center aligned text</Text>
    </div>
    <div class="text-story-box">
      <Text align="right">Right aligned text</Text>
    </div>
  </div>
</Story>

<Story name="Text Truncation">
  <div class="text-story-stack">
    <div>
      <Text variant="body-small-strong" style="margin-bottom: 8px;">Truncation Enabled:</Text>
      <div style="width: 300px; border: 1px solid #ddd; padding: 16px; border-radius: 4px;">
        <Text truncate>
          This is a very long text that should be truncated with an ellipsis when it exceeds the container width. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
    </div>
    <div>
      <Text variant="body-small-strong" style="margin-bottom: 8px;">Truncation Disabled:</Text>
      <div style="width: 300px; border: 1px solid #ddd; padding: 16px; border-radius: 4px;">
        <Text>
          This is a very long text that should be truncated with an ellipsis when it exceeds the container width. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
    </div>
    <div>
      <Text variant="body-small-strong" style="margin-bottom: 8px;">Interactive (use controls):</Text>
      <div style="width: 300px; border: 1px solid #ddd; padding: 16px; border-radius: 4px;">
        <Text truncate={true}>
          This is a very long text that should be truncated with an ellipsis when it exceeds the container width. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
    </div>
  </div>
</Story>

<Story name="Rich Article Example">
  <article class="text-story-article">
    <Text variant="display" as="h1">Introducing Figma UI3</Text>
    <Text variant="body-large" color="secondary" style="margin-top: 16px;">
      A comprehensive design system for building modern interfaces
    </Text>
    <Text variant="heading-2" as="h2" style="margin-top: 32px;">Typography System</Text>
    <Text variant="body" style="margin-top: 16px;">
      UI3 introduces type tokens for body text and headings organized around t-shirt sizes — large,
      medium, small — to allow designers to easily construct multiple levels of hierarchy. In order
      to create consistency around bolding, we will also include a "strong" variant for body text.
    </Text>
    <div style="margin-top: 24px;">
      <Text variant="body-small-strong">Key Features:</Text>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><Text variant="body-small">Consistent type scale across all components</Text></li>
        <li><Text variant="body-small">Support for semantic HTML elements</Text></li>
        <li><Text variant="body-small">Built-in color system with semantic variants</Text></li>
      </ul>
    </div>
  </article>
</Story>

<Story name="Playground" args={{
  children: 'Customize this text using the controls panel. Try different variants, colors, and alignments to see how the component behaves.',
  variant: 'body',
  color: 'primary',
  align: 'left',
  truncate: false,
  as: 'p'
}} />

<style>
  :global(.docs-story, .sb-story) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 11px;
    line-height: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .text-story-stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .text-story-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .text-story-box {
    padding: 16px;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }

  .text-story-article {
    max-width: 600px;
    padding: 32px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
</style>