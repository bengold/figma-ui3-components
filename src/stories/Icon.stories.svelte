<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Icon from '$lib/components/Icon.svelte';
  import { icons } from '$lib/icons/index.js';

  const { Story } = defineMeta({
    title: 'Figma UI3/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
      name: {
        control: { type: 'select' },
        options: Object.keys(icons),
        description: 'Icon name from available icons',
      },
      size: {
        control: { type: 'select' },
        options: [16, 24, 32],
        description: 'Icon size in pixels',
        table: {
          defaultValue: { summary: 24 }
        }
      },
      color: {
        control: { type: 'select' },
        options: ['current', 'primary', 'secondary', 'tertiary', 'error', 'success', 'white'],
        description: 'Icon color variant',
        table: {
          defaultValue: { summary: 'current' }
        }
      },
    },
  });
</script>

<script>
  import Text from '$lib/components/Text.svelte';
  import './icon-demo.css';
  
  const iconList = Object.keys(icons);
</script>

<!-- Default story -->
<Story name="Default">
  <Icon name="settings" />
</Story>

<!-- All sizes -->
<Story name="Icon Sizes">
  <div class="icon-story-row">
    <div class="icon-story-item">
      <Icon name="settings" size={16} />
      <Text variant="body-small" color="secondary">16px</Text>
    </div>
    <div class="icon-story-item">
      <Icon name="settings" size={24} />
      <Text variant="body-small" color="secondary">24px (default)</Text>
    </div>
    <div class="icon-story-item">
      <Icon name="settings" size={32} />
      <Text variant="body-small" color="secondary">32px</Text>
    </div>
  </div>
</Story>

<!-- All colors -->
<Story name="Icon Colors">
  <div class="icon-story-grid">
    <div class="icon-story-item">
      <Icon name="check" color="current" />
      <Text variant="body-small" color="secondary">current</Text>
    </div>
    <div class="icon-story-item">
      <Icon name="check" color="primary" />
      <Text variant="body-small" color="secondary">primary</Text>
    </div>
    <div class="icon-story-item">
      <Icon name="check" color="secondary" />
      <Text variant="body-small" color="secondary">secondary</Text>
    </div>
    <div class="icon-story-item">
      <Icon name="check" color="tertiary" />
      <Text variant="body-small" color="secondary">tertiary</Text>
    </div>
    <div class="icon-story-item">
      <Icon name="check" color="error" />
      <Text variant="body-small" color="secondary">error</Text>
    </div>
    <div class="icon-story-item">
      <Icon name="check" color="success" />
      <Text variant="body-small" color="secondary">success</Text>
    </div>
    <div class="icon-story-item icon-story-dark">
      <Icon name="check" color="white" />
      <Text variant="body-small" style="color: white;">white</Text>
    </div>
  </div>
</Story>

<!-- Icon gallery -->
<Story name="Icon Gallery">
  <div class="icon-gallery">
    {#each iconList as iconName}
      <div class="icon-gallery-item">
        <div class="icon-gallery-preview">
          <Icon name={iconName} />
        </div>
        <Text variant="body-small" color="secondary" align="center">
          {iconName}
        </Text>
      </div>
    {/each}
  </div>
</Story>

<!-- Common patterns -->
<Story name="Common Patterns">
  <div class="icon-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Buttons with Icons</Text>
    <div class="icon-story-row">
      <button class="icon-demo-button">
        <Icon name="plus" size={16} />
        <Text variant="body">Add Item</Text>
      </button>
      <button class="icon-demo-button">
        <Icon name="search" size={16} />
        <Text variant="body">Search</Text>
      </button>
      <button class="icon-demo-button">
        <Text variant="body">Settings</Text>
        <Icon name="chevron-down" size={16} />
      </button>
      <button class="icon-demo-button icon-only">
        <Icon name="close" size={16} />
      </button>
    </div>
  </div>

  <div class="icon-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Status Messages</Text>
    <div class="icon-story-stack">
      <div class="icon-status-message">
        <Icon name="check" size={16} color="success" />
        <Text variant="body">Operation completed successfully</Text>
      </div>
      <div class="icon-status-message">
        <Icon name="close" size={16} color="error" />
        <Text variant="body">An error occurred while processing</Text>
      </div>
      <div class="icon-status-message">
        <Icon name="settings" size={16} color="secondary" />
        <Text variant="body" color="secondary">Configuration required</Text>
      </div>
    </div>
  </div>

  <div class="icon-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Navigation</Text>
    <div class="icon-story-stack">
      <a href="#" class="icon-nav-link">
        <Icon name="chevron-left" size={16} />
        <Text variant="body">Back to previous</Text>
      </a>
      <a href="#" class="icon-nav-link">
        <Text variant="body">View more options</Text>
        <Icon name="chevron-right" size={16} />
      </a>
    </div>
  </div>

  <div class="icon-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">List Items</Text>
    <div class="icon-story-stack">
      <div class="icon-list-item">
        <Icon name="check" size={16} color="success" />
        <Text variant="body">Completed task</Text>
      </div>
      <div class="icon-list-item">
        <Icon name="more" size={16} color="secondary" />
        <Text variant="body">In progress task</Text>
      </div>
      <div class="icon-list-item">
        <Icon name="plus" size={16} color="tertiary" />
        <Text variant="body" color="tertiary">Add new task</Text>
      </div>
    </div>
  </div>
</Story>

<!-- Interactive states -->
<Story name="Interactive States">
  <div class="icon-story-section">
    <Text variant="body-strong" style="margin-bottom: 16px;">Hover and Active States</Text>
    <div class="icon-story-row">
      <button class="icon-interactive-button">
        <Icon name="settings" />
        <span class="tooltip">Settings</span>
      </button>
      <button class="icon-interactive-button">
        <Icon name="search" />
        <span class="tooltip">Search</span>
      </button>
      <button class="icon-interactive-button">
        <Icon name="more" />
        <span class="tooltip">More options</span>
      </button>
    </div>
  </div>
</Story>

<!-- Size comparison -->
<Story name="Size Comparison">
  <div class="icon-size-comparison">
    <div class="icon-size-group">
      <Text variant="body-small-strong" color="secondary">16px</Text>
      <div class="icon-size-row">
        {#each ['check', 'close', 'plus', 'search', 'settings'] as iconName}
          <Icon name={iconName} size={16} />
        {/each}
      </div>
    </div>
    <div class="icon-size-group">
      <Text variant="body-small-strong" color="secondary">24px</Text>
      <div class="icon-size-row">
        {#each ['check', 'close', 'plus', 'search', 'settings'] as iconName}
          <Icon name={iconName} size={24} />
        {/each}
      </div>
    </div>
    <div class="icon-size-group">
      <Text variant="body-small-strong" color="secondary">32px</Text>
      <div class="icon-size-row">
        {#each ['check', 'close', 'plus', 'search', 'settings'] as iconName}
          <Icon name={iconName} size={32} />
        {/each}
      </div>
    </div>
  </div>
</Story>

<!-- Playground -->
<Story name="Playground" args={{
  name: 'settings',
  size: 24,
  color: 'primary',
}}>
  {#snippet children(args)}
    <div class="icon-playground">
      <Icon {...args} />
    </div>
  {/snippet}
</Story>