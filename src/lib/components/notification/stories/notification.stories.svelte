<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Notification from '../notification.svelte';

  const { Story } = defineMeta({
    title: 'Components/Notification',
    component: Notification,
    parameters: {
      docs: {
        description: {
          component: 'Notification component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
