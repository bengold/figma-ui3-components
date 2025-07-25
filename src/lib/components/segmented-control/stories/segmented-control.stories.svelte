<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SegmentedControl from '../segmented-control.svelte';

  const { Story } = defineMeta({
    title: 'Components/SegmentedControl',
    component: SegmentedControl,
    parameters: {
      docs: {
        description: {
          component: 'SegmentedControl component for Figma UI3.'
        }
      }
    }
  });
</script>

<Story name="Default" />
