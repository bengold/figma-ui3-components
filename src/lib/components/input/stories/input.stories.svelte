<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from '../input.svelte';

  const { Story } = defineMeta({
    title: 'Components/Input',
    component: Input,
    parameters: {
      docs: {
        description: {
          component: 'Input component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
