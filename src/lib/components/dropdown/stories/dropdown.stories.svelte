<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Dropdown from '../dropdown.svelte';

  const { Story } = defineMeta({
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
      docs: {
        description: {
          component: 'Dropdown component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
