<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Modal from './modal.svelte';

  const { Story } = defineMeta({
    title: 'Components/Modal',
    component: Modal,
    parameters: {
      docs: {
        description: {
          component: 'Modal component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
