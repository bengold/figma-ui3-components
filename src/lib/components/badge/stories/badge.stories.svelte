<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Badge from '../badge.svelte';

  const { Story } = defineMeta({
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: [
          'default',
          'brand',
          'component',
          'danger',
          'feedback',
          'figjam',
          'invert',
          'selected',
          'success',
          'variable',
          'variable-selected',
          'warn',
          'merged',
          'archived',
          'menu'
        ],
        description: 'Visual style variant of the badge'
      },
      strong: {
        control: { type: 'boolean' },
        description: 'Whether to use filled background style'
      },
      size: {
        control: { type: 'select' },
        options: ['small', 'large'],
        description: 'Badge size variant'
      },
      iconStart: {
        control: { type: 'select' },
        options: [undefined, 'adjust', 'ai-sort', 'ai-summarize', 'ai', 'all', 'animated', 'approved-checkmark', 'arrow', 'autolayout-absolute-position', 'autolayout-alignment-baseline', 'autolayout-horizontal-bottom', 'autolayout-horizontal-center', 'autolayout-horizontal-top', 'autolayout-vertical-center', 'autolayout-vertical-left', 'autolayout-vertical-right', 'autolayout-wrap-center', 'autolayout-wrap-left', 'autolayout-wrap-right', 'autolayoutgrid-auto-horizontal-large-center', 'autolayoutgrid-auto-horizontal-large-left', 'autolayoutgrid-auto-horizontal-large-right', 'autolayoutgrid-auto-horizontal-small-bottom', 'autolayoutgrid-auto-horizontal-small-center', 'autolayoutgrid-auto-horizontal-small-top', 'autolayoutgrid-auto-vertical-small-center', 'autolayoutgrid-auto-vertical-small-left', 'autolayoutgrid-auto-vertical-small-right', 'autolayoutgrid-dot', 'autolayoutgrid-horizontal-bottom', 'autolayoutgrid-horizontal-center', 'autolayoutgrid-horizontal-top', 'autolayoutgrid-vertical-auto-large-bottom', 'autolayoutgrid-vertical-auto-large-center', 'autolayoutgrid-vertical-auto-large-top', 'autolayoutgrid-vertical-center', 'autolayoutgrid-vertical-left', 'autolayoutgrid-vertical-right', 'autolayoutgrid-wrap-center', 'autolayoutgrid-wrap-left', 'autolayoutgrid-wrap-right', 'boolean-exclude', 'boolean-intersect', 'boolean-subtract', 'boolean', 'boolean-union', 'branch', 'check', 'chevron-down', 'chevron-right', 'close', 'community', 'complexvector', 'component-property', 'component-set', 'component', 'connector', 'contrast', 'cover-art', 'design', 'desktop', 'detach', 'dev-edited', 'dev', 'drag-handle', 'ellipse', 'exposeNested', 'exposure', 'feedback', 'figjam', 'first-draft', 'flatten', 'folder', 'frame', 'group', 'heart', 'help', 'hidden', 'highlights', 'home', 'image', 'info', 'instance', 'library', 'line', 'link', 'linkedobject', 'lock-locked', 'lock-unlocked', 'locked-layer-child', 'mask', 'mixed', 'mobile', 'more', 'multi-edit', 'navigate-forward', 'notes-on-rectangle-small', 'number', 'other', 'page', 'password', 'pen', 'person', 'placeholder', 'plus', 'polygon', 'prototype', 'publish', 'rating-filled', 'rating', 'ready-for-dev', 'rectangle', 'refresh', 'reset', 'saturation', 'section', 'shadows', 'shape-text', 'show-all', 'slide', 'slides-small', 'slides', 'stamp', 'star', 'sticky', 'string', 'tablet', 'temperature', 'text', 'tint', 'ui-kit', 'unread', 'variable-color', 'variable-mode', 'variable', 'variant', 'visible', 'wand', 'warning', 'widget'],
        description: 'Icon to display at the start (any 16px icon name)'
      },
      iconEnd: {
        control: { type: 'select' },
        options: [undefined, 'adjust', 'ai-sort', 'ai-summarize', 'ai', 'all', 'animated', 'approved-checkmark', 'arrow', 'autolayout-absolute-position', 'autolayout-alignment-baseline', 'autolayout-horizontal-bottom', 'autolayout-horizontal-center', 'autolayout-horizontal-top', 'autolayout-vertical-center', 'autolayout-vertical-left', 'autolayout-vertical-right', 'autolayout-wrap-center', 'autolayout-wrap-left', 'autolayout-wrap-right', 'autolayoutgrid-auto-horizontal-large-center', 'autolayoutgrid-auto-horizontal-large-left', 'autolayoutgrid-auto-horizontal-large-right', 'autolayoutgrid-auto-horizontal-small-bottom', 'autolayoutgrid-auto-horizontal-small-center', 'autolayoutgrid-auto-horizontal-small-top', 'autolayoutgrid-auto-vertical-small-center', 'autolayoutgrid-auto-vertical-small-left', 'autolayoutgrid-auto-vertical-small-right', 'autolayoutgrid-dot', 'autolayoutgrid-horizontal-bottom', 'autolayoutgrid-horizontal-center', 'autolayoutgrid-horizontal-top', 'autolayoutgrid-vertical-auto-large-bottom', 'autolayoutgrid-vertical-auto-large-center', 'autolayoutgrid-vertical-auto-large-top', 'autolayoutgrid-vertical-center', 'autolayoutgrid-vertical-left', 'autolayoutgrid-vertical-right', 'autolayoutgrid-wrap-center', 'autolayoutgrid-wrap-left', 'autolayoutgrid-wrap-right', 'boolean-exclude', 'boolean-intersect', 'boolean-subtract', 'boolean', 'boolean-union', 'branch', 'check', 'chevron-down', 'chevron-right', 'close', 'community', 'complexvector', 'component-property', 'component-set', 'component', 'connector', 'contrast', 'cover-art', 'design', 'desktop', 'detach', 'dev-edited', 'dev', 'drag-handle', 'ellipse', 'exposeNested', 'exposure', 'feedback', 'figjam', 'first-draft', 'flatten', 'folder', 'frame', 'group', 'heart', 'help', 'hidden', 'highlights', 'home', 'image', 'info', 'instance', 'library', 'line', 'link', 'linkedobject', 'lock-locked', 'lock-unlocked', 'locked-layer-child', 'mask', 'mixed', 'mobile', 'more', 'multi-edit', 'navigate-forward', 'notes-on-rectangle-small', 'number', 'other', 'page', 'password', 'pen', 'person', 'placeholder', 'plus', 'polygon', 'prototype', 'publish', 'rating-filled', 'rating', 'ready-for-dev', 'rectangle', 'refresh', 'reset', 'saturation', 'section', 'shadows', 'shape-text', 'show-all', 'slide', 'slides-small', 'slides', 'stamp', 'star', 'sticky', 'string', 'tablet', 'temperature', 'text', 'tint', 'ui-kit', 'unread', 'variable-color', 'variable-mode', 'variable', 'variant', 'visible', 'wand', 'warning', 'widget'],
        description: 'Icon to display at the end (any 16px icon name)'
      },
      children: {
        control: { type: 'text' },
        description: 'Badge text content'
      }
    },
    parameters: {
      docs: {
        description: {
          component: 'Small badge component for labeling and categorization in Figma UI3.'
        }
      },
      layout: 'centered'
    }
  });
</script>


<Story name="Default Small" args={{ children: 'Badge', size: 'small' }} />

<Story name="Default Large" args={{ children: 'Badge', size: 'large' }} />

<Story name="Size Comparison">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge size="small">Small Badge</Badge>
      <Badge size="small" strong>Small Strong</Badge>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge size="large">Large Badge</Badge>
      <Badge size="large" strong>Large Strong</Badge>
    </div>
  </div>
</Story>

<Story name="Large Badge Variants">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge size="large" variant="default">Default</Badge>
      <Badge size="large" variant="default" strong>Strong</Badge>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge size="large" variant="merged" iconStart="check">Merged</Badge>
      <Badge size="large" variant="archived" iconStart="folder">Archived</Badge>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge size="large" variant="brand">Brand</Badge>
      <Badge size="large" variant="success">Success</Badge>
      <Badge size="large" variant="danger">Danger</Badge>
      <Badge size="large" variant="warn">Warning</Badge>
    </div>
  </div>
</Story>

<Story name="Playground" args={{ 
  children: 'Badge Text',
  variant: 'default',
  strong: false,
  size: 'small'
}} />

<style>
  :global(.docs-story, .sb-story) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 11px;
    line-height: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>