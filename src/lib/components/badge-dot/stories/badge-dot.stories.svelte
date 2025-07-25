<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BadgeDot from '../badge-dot.svelte';

  const { Story } = defineMeta({
    title: 'Components/Badge Dot',
    component: BadgeDot,
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'brand', 'success', 'danger', 'warning', 'neutral'],
        description: 'Color variant of the dot'
      },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium'],
        description: 'Size of the dot badge'
      }
    },
    parameters: {
      docs: {
        description: {
          component: 'Minimal dot indicator for status and notifications in Figma UI3.'
        }
      },
      layout: 'centered'
    }
  });
</script>

<Story name="Default" args={{ variant: 'brand', size: 'small' }} />

<Story name="All Variants">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <BadgeDot variant="default" />
        <span style="font-size: 11px; color: #666;">Default</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <BadgeDot variant="brand" />
        <span style="font-size: 11px; color: #666;">Brand</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <BadgeDot variant="success" />
        <span style="font-size: 11px; color: #666;">Success</span>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <BadgeDot variant="danger" />
        <span style="font-size: 11px; color: #666;">Danger</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <BadgeDot variant="warning" />
        <span style="font-size: 11px; color: #666;">Warning</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <BadgeDot variant="neutral" />
        <span style="font-size: 11px; color: #666;">Neutral</span>
      </div>
    </div>
  </div>
</Story>

<Story name="Size Comparison">
  <div style="display: flex; align-items: center; gap: 24px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <BadgeDot size="small" />
      <span style="font-size: 11px; color: #666;">Small (10×10px container, 5×5px dot)</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <BadgeDot size="medium" />
      <span style="font-size: 11px; color: #666;">Medium (16×16px container, 8×8px dot)</span>
    </div>
  </div>
</Story>

<Story name="Usage Example">
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 11px;">New messages</span>
      <BadgeDot variant="brand" />
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 11px;">Online</span>
      <BadgeDot variant="success" />
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 11px;">Error</span>
      <BadgeDot variant="danger" />
    </div>
  </div>
</Story>

<Story name="Playground" args={{ 
  variant: 'brand',
  size: 'small'
}} />

<style>
  :global(.docs-story, .sb-story) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>