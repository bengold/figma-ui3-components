<script context="module" lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tooltip from '../tooltip.svelte';
  import Button from '../../button/button.svelte';
  import Icon from '../../icon/icon.svelte';

  const { Story } = defineMeta({
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
      content: {
        control: { type: 'text' },
        description: 'The content to display in the tooltip'
      },
      shortcut: {
        control: { type: 'text' },
        description: 'Optional keyboard shortcut to display'
      },
      placement: {
        control: { type: 'select' },
        options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'],
        description: 'Placement of the tooltip relative to the trigger'
      },
      visible: {
        control: { type: 'boolean' },
        description: 'Whether the tooltip is visible'
      },
      showDelay: {
        control: { type: 'number' },
        description: 'Delay before showing tooltip on hover (ms)'
      },
      hideDelay: {
        control: { type: 'number' },
        description: 'Delay before hiding tooltip on mouse leave (ms)'
      }
    },
    parameters: {
      docs: {
        description: {
          component: 'Tooltip component for displaying contextual information with keyboard shortcuts in Figma UI3.'
        }
      },
      layout: 'centered'
    }
  });
</script>

<Story name="Default">
  <div style="padding: 48px;">
    <Tooltip content="Tooltip text" placement="top" showDelay={0}>
      <Button>Hover me</Button>
    </Tooltip>
  </div>
</Story>

<Story name="With Shortcut">
  <div style="padding: 48px;">
    <Tooltip content="Paste" shortcut="⌘V" placement="top" showDelay={0}>
        <Button>Paste</Button>
    </Tooltip>
  </div>
</Story>

<Story name="All Placements">
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; padding: 48px;">
    <div style="grid-column: 1;">
      <Tooltip content="Top start tooltip" placement="top-start">
            <Button>Top Start</Button>
        </Tooltip>
    </div>

    <div style="grid-column: 2; justify-self: center;">
      <Tooltip content="Top tooltip" placement="top">
            <Button>Top</Button>
        </Tooltip>
    </div>
    
    <div style="grid-column: 3; justify-self: end;">
      <Tooltip content="Top end tooltip" placement="top-end">
            <Button>Top End</Button>
        </Tooltip>
    </div>
    
    <div style="grid-column: 1; align-self: center;">
      <Tooltip content="Left tooltip with longer text" placement="left">
            <Button>Left</Button>
        </Tooltip>
    </div>
    
    <div style="grid-column: 2; justify-self: center; align-self: center;">
      <div style="padding: 24px; border: 1px dashed #ddd; border-radius: 4px;">
        <p style="margin: 0; color: #666; font-size: 11px;">Hover any button</p>
      </div>
    </div>
    
    <div style="grid-column: 3; justify-self: end; align-self: center;">
      <Tooltip content="Right tooltip" placement="right">
            <Button>Right</Button>
        </Tooltip>
    </div>
    
    <div style="grid-column: 1;">
      <Tooltip content="Bottom start tooltip" placement="bottom-start">
            <Button>Bottom Start</Button>
        </Tooltip>
    </div>
    
    <div style="grid-column: 2; justify-self: center;">
      <Tooltip content="Bottom tooltip" placement="bottom">
            <Button>Bottom</Button>
        </Tooltip>
    </div>
    
    <div style="grid-column: 3; justify-self: end;">
      <Tooltip content="Bottom end tooltip" placement="bottom-end">
            <Button>Bottom End</Button>
        </Tooltip>
    </div>
  </div>
</Story>

<Story name="Various Triggers">
  <div style="display: flex; gap: 24px; align-items: center;">
    <Tooltip content="Button tooltip">
        <Button>Button</Button>
    </Tooltip>
    
    <Tooltip content="Icon tooltip">
        <Icon name="help" size={24} style="cursor: pointer;" />
    </Tooltip>
    
    <Tooltip content="Text tooltip">
        <span style="text-decoration: underline; cursor: help;">Hover this text</span>
    </Tooltip>
    
    <Tooltip content="Link tooltip">
        <a href="#" style="color: #007be5;">Learn more</a>
    </Tooltip>
  </div>
</Story>

<Story name="Keyboard Shortcuts">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Tooltip content="Copy" shortcut="⌘C">
        <Button>Copy</Button>
    </Tooltip>
    
    <Tooltip content="Paste" shortcut="⌘V">
        <Button>Paste</Button>
    </Tooltip>
    
    <Tooltip content="Undo" shortcut="⌘Z">
        <Button>Undo</Button>
    </Tooltip>
    
    <Tooltip content="Save" shortcut="⌘S">
        <Button>Save</Button>
    </Tooltip>
  </div>
</Story>

<Story name="Delay Examples">
  <div style="display: flex; gap: 24px;">
    <Tooltip content="No delay" showDelay={0}>
        <Button>Instant</Button>
    </Tooltip>
    
    <Tooltip content="Default delay (500ms)" showDelay={500}>
        <Button>Default</Button>
    </Tooltip>
    
    <Tooltip content="Long delay (1000ms)" showDelay={1000}>
        <Button>Slow</Button>
    </Tooltip>
  </div>
</Story>

<Story name="Always Visible">
  <div style="padding: 48px;">
    <Tooltip 
      content="This tooltip is always visible" 
      visible={true}
      placement="top"
    >
        <Button>Always visible tooltip</Button>
    </Tooltip>
  </div>
</Story>

<Story name="Playground">
  <div style="padding: 48px;">
    <Tooltip 
      content="Tooltip content"
      shortcut="⌘K"
      placement="top"
      showDelay={500}
      hideDelay={0}
    >
      <Button>Hover to see tooltip</Button>
    </Tooltip>
  </div>
</Story>

<style>
  :global(.docs-story, .sb-story) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>