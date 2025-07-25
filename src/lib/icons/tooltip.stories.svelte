<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tooltip from '../tooltip.svelte';

  const { Story } = defineMeta({
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
      docs: {
        description: {
          component: 'Tooltip component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
