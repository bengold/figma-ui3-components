<script lang="ts">
  import Text from '$lib/components/Text.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { icons, type IconName } from '$lib/icons/index.js';
  
  let selectedIcon: IconName = 'settings';
  let selectedSize: 16 | 24 | 32 = 24;
  let selectedColor: 'current' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'white' = 'primary';
  
  const iconList = Object.keys(icons) as IconName[];
</script>

<div class="container">
  <header>
    <a href="/" class="back-link">
      <Icon name="chevron-left" size={16} />
      <Text variant="body">Back</Text>
    </a>
    <Text variant="display" as="h1" style="margin-top: 24px;">
      Icons
    </Text>
    <Text variant="body-large" color="secondary" style="margin-top: 16px; max-width: 600px;">
      A comprehensive icon library from Figma's UI3 design system. Icons support multiple sizes and colors, with consistent 24px viewBox for scalability.
    </Text>
  </header>

  <section class="playground">
    <Text variant="heading-1" as="h2">Icon Playground</Text>
    <Text variant="body" color="secondary" style="margin-bottom: 32px;">
      Select an icon and customize its properties.
    </Text>

    <div class="playground-content">
      <div class="preview-area">
        <Icon name={selectedIcon} size={selectedSize} color={selectedColor} />
      </div>
      
      <div class="controls">
        <div class="control-group">
          <Text variant="body-small-strong">Icon</Text>
          <select bind:value={selectedIcon} class="select">
            {#each iconList as name}
              <option value={name}>{name}</option>
            {/each}
          </select>
        </div>

        <div class="control-group">
          <Text variant="body-small-strong">Size</Text>
          <div class="radio-group">
            <label>
              <input type="radio" bind:group={selectedSize} value={16} />
              <Text variant="body-small">16px</Text>
            </label>
            <label>
              <input type="radio" bind:group={selectedSize} value={24} />
              <Text variant="body-small">24px</Text>
            </label>
            <label>
              <input type="radio" bind:group={selectedSize} value={32} />
              <Text variant="body-small">32px</Text>
            </label>
          </div>
        </div>

        <div class="control-group">
          <Text variant="body-small-strong">Color</Text>
          <select bind:value={selectedColor} class="select">
            <option value="current">Current Color</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="tertiary">Tertiary</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
            <option value="white">White</option>
          </select>
        </div>

        <div class="code-snippet">
          <Text variant="body-small-strong">Usage</Text>
          <code>
            {`<Icon name="${selectedIcon}" size={${selectedSize}} color="${selectedColor}" />`}
          </code>
        </div>
      </div>
    </div>
  </section>

  <section class="icon-grid-section">
    <Text variant="heading-1" as="h2">All Icons</Text>
    <Text variant="body" color="secondary" style="margin-bottom: 32px;">
      Click any icon to select it in the playground above.
    </Text>

    <div class="icon-grid">
      {#each iconList as name}
        <button 
          class="icon-item" 
          class:selected={selectedIcon === name}
          on:click={() => selectedIcon = name}
        >
          <Icon {name} size={24} />
          <Text variant="body-small" color="secondary">{name}</Text>
        </button>
      {/each}
    </div>
  </section>

  <section class="examples-section">
    <Text variant="heading-1" as="h2">Usage Examples</Text>
    <Text variant="body" color="secondary" style="margin-bottom: 32px;">
      Common patterns for using icons in your UI.
    </Text>

    <div class="example">
      <Text variant="body-strong">With Buttons</Text>
      <div class="example-content">
        <button class="example-button">
          <Icon name="plus" size={16} />
          <Text variant="body">Add Item</Text>
        </button>
        <button class="example-button">
          <Text variant="body">Next</Text>
          <Icon name="chevron-right" size={16} />
        </button>
        <button class="example-button icon-only">
          <Icon name="close" size={16} />
        </button>
      </div>
    </div>

    <div class="example">
      <Text variant="body-strong">Status Indicators</Text>
      <div class="example-content">
        <div class="status-item">
          <Icon name="check" size={16} color="success" />
          <Text variant="body">Completed successfully</Text>
        </div>
        <div class="status-item">
          <Icon name="close" size={16} color="error" />
          <Text variant="body">Error occurred</Text>
        </div>
        <div class="status-item">
          <Icon name="more" size={16} color="secondary" />
          <Text variant="body" color="secondary">Processing...</Text>
        </div>
      </div>
    </div>

    <div class="example">
      <Text variant="body-strong">Navigation</Text>
      <div class="example-content">
        <div class="nav-item">
          <Icon name="chevron-left" size={16} />
          <Text variant="body">Back</Text>
        </div>
        <div class="nav-item">
          <Text variant="body">Show more</Text>
          <Icon name="chevron-down" size={16} />
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: inherit;
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  .back-link:hover {
    opacity: 1;
  }

  header {
    margin-bottom: 64px;
  }

  .playground {
    margin-bottom: 80px;
  }

  .playground-content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 48px;
    align-items: start;
  }

  .preview-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 12px;
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .control-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .select {
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background: white;
    font-family: inherit;
    font-size: 11px;
    line-height: 16px;
  }

  .radio-group {
    display: flex;
    gap: 16px;
  }

  .radio-group label {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  .code-snippet {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 8px;
  }

  .code-snippet code {
    font-family: monospace;
    font-size: 12px;
    line-height: 20px;
  }

  .icon-grid-section {
    margin-bottom: 80px;
  }

  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 16px;
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px 16px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .icon-item:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: rgba(0, 0, 0, 0.1);
  }

  .icon-item.selected {
    background: rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.2);
  }

  .examples-section {
    margin-bottom: 80px;
  }

  .example {
    margin-bottom: 32px;
  }

  .example-content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
  }

  .example-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .example-button:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: rgba(0, 0, 0, 0.2);
  }

  .example-button.icon-only {
    padding: 8px;
  }

  .status-item,
  .nav-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 768px) {
    .playground-content {
      grid-template-columns: 1fr;
    }
    
    .preview-area {
      height: 200px;
    }
  }
</style>