<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Switch from '../switch.svelte';

  const { Story } = defineMeta({
    title: 'Components/Switch',
    component: Switch,
    parameters: {
      docs: {
        description: {
          component: 'Switch component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
