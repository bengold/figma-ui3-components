<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tabs from '../tabs.svelte';

  const { Story } = defineMeta({
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
      docs: {
        description: {
          component: 'Tabs component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
