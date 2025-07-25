<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Bells from '../bells.svelte';

  const { Story } = defineMeta({
    title: 'Components/Bells',
    component: Bells,
    parameters: {
      docs: {
        description: {
          component: 'Bells component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
