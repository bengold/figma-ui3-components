<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Avatar from '../avatar.svelte';

  const { Story } = defineMeta({
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
      docs: {
        description: {
          component: 'Avatar component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" args={{ alt: 'User Avatar' }} />

<Story name="With Image" args={{ 
  src: 'https://via.placeholder.com/150',
  alt: 'User Avatar'
}} />

<Story name="Sizes">
  <div style="display: flex; gap: 16px; align-items: center;">
    <Avatar size="small" />
    <Avatar size="medium" />
    <Avatar size="large" />
  </div>
</Story>
