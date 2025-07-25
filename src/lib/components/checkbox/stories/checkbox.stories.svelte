<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from '../checkbox.svelte';

  const { Story } = defineMeta({
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
      docs: {
        description: {
          component: 'Checkbox component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
