<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Slider from '../slider.svelte';

  const { Story } = defineMeta({
    title: 'Components/Slider',
    component: Slider,
    parameters: {
      docs: {
        description: {
          component: 'Slider component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
