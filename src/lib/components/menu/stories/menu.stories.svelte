<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Menu from '../menu.svelte';

  const { Story } = defineMeta({
    title: 'Components/Menu',
    component: Menu,
    parameters: {
      docs: {
        description: {
          component: 'Menu component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
