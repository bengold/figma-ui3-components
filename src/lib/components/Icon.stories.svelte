<script context="module" lang="ts">
  import type { Meta } from '@storybook/svelte';
  import Icon from './Icon.svelte';
  import { icons, type IconName } from '../icons/index.js';

  export const meta = {
    title: 'Components/Icon',
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
      },
      color: {
        control: { type: 'select' },
        options: ['current', 'primary', 'secondary', 'tertiary', 'error', 'success', 'white'],
        description: 'Icon color variant',
      },
    },
  } satisfies Meta<Icon>;
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import Text from './Text.svelte';
</script>

<Story name="Default">
  <Icon name="check" />
</Story>

<Story name="All Icons">
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 24px; padding: 20px;">
    {#each Object.keys(icons) as iconName}
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <div style="display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: #f5f5f5; border-radius: 8px;">
          <Icon name={iconName} />
        </div>
        <Text variant="body-small" color="secondary" align="center" style="word-break: break-all;">
          {iconName}
        </Text>
      </div>
    {/each}
  </div>
</Story>

<Story name="Sizes">
  <div style="display: flex; align-items: center; gap: 24px;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="settings" size={16} />
      <Text variant="body-small" color="secondary">16px</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="settings" size={24} />
      <Text variant="body-small" color="secondary">24px (default)</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="settings" size={32} />
      <Text variant="body-small" color="secondary">32px</Text>
    </div>
  </div>
</Story>

<Story name="Colors">
  <div style="display: flex; flex-wrap: wrap; gap: 24px;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="close" color="current" />
      <Text variant="body-small" color="secondary">current</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="close" color="primary" />
      <Text variant="body-small" color="secondary">primary</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="close" color="secondary" />
      <Text variant="body-small" color="secondary">secondary</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="close" color="tertiary" />
      <Text variant="body-small" color="secondary">tertiary</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="close" color="error" />
      <Text variant="body-small" color="secondary">error</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <Icon name="close" color="success" />
      <Text variant="body-small" color="secondary">success</Text>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: #333; border-radius: 8px;">
      <Icon name="close" color="white" />
      <Text variant="body-small" style="color: white;">white</Text>
    </div>
  </div>
</Story>

<Story name="With Text">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <Icon name="check" color="success" />
      <Text>Success message with icon</Text>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Icon name="close" color="error" size={16} />
      <Text variant="body-small">Error message with small icon</Text>
    </div>
    <div style="display: flex; align-items: center; gap: 4px;">
      <Text>Click to expand</Text>
      <Icon name="chevron-right" size={16} color="secondary" />
    </div>
  </div>
</Story>

<Story name="Interactive">
  <div style="display: flex; gap: 16px;">
    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; border: 1px solid #ddd; border-radius: 6px; background: white; cursor: pointer;">
      <Icon name="plus" size={16} />
      <Text variant="body">Add Item</Text>
    </button>
    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; border: 1px solid #ddd; border-radius: 6px; background: white; cursor: pointer;">
      <Icon name="search" size={16} />
      <Text variant="body">Search</Text>
    </button>
    <button style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border: 1px solid #ddd; border-radius: 6px; background: white; cursor: pointer;">
      <Icon name="more" size={16} />
    </button>
  </div>
</Story>

<Story name="Playground" args={{
  name: 'settings',
  size: 24,
  color: 'primary',
}}>
  {#snippet children(args)}
    <div style="display: flex; align-items: center; justify-content: center; padding: 40px; background: #f5f5f5;">
      <Icon {...args} />
    </div>
  {/snippet}
</Story>