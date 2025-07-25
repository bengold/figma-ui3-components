<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RadioButton from '../radio-button.svelte';

  const { Story } = defineMeta({
    title: 'Components/RadioButton',
    component: RadioButton,
    parameters: {
      docs: {
        description: {
          component: 'RadioButton component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
