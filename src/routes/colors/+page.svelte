<script lang="ts">
  import Text from '$lib/components/text/text.svelte';
  import Icon from '$lib/components/icon/icon.svelte';

  const colorGroups = [
    {
      name: 'Figma Variables - Text Colors',
      description: 'Text colors from Figma UI3 variables.json',
      colors: [
        { name: 'text-default-default', value: '#ffffff', showBorder: true },
        { name: 'text-default-secondary', value: 'rgba(255, 255, 255, 0.7)', showBorder: true },
        { name: 'text-default-tertiary', value: 'rgba(255, 255, 255, 0.4)', showBorder: true },
        { name: 'text-brand-default', value: '#ffa27a' },
        { name: 'text-brand-onbrand', value: '#ffffff', showBorder: true },
        { name: 'text-danger-default', value: '#fca397' },
        { name: 'text-success-default', value: '#79d297' },
        { name: 'text-warning-default', value: '#f7d15f' },
      ]
    },
    {
      name: 'Figma Variables - Background Colors',
      description: 'Background colors from Figma UI3 variables.json',
      colors: [
        { name: 'bg-default-default', value: '#000000', textColor: 'white' },
        { name: 'bg-default-hover', value: '#1e1e1e', textColor: 'white' },
        { name: 'bg-default-pressed', value: '#383838', textColor: 'white' },
        { name: 'bg-brand-default', value: '#ff7038', textColor: 'white' },
        { name: 'bg-brand-hover', value: '#e15f2a', textColor: 'white' },
        { name: 'bg-danger-default', value: '#ed5e47', textColor: 'white' },
        { name: 'bg-success-default', value: '#0fa958', textColor: 'white' },
        { name: 'bg-warning-default', value: '#ffab00' },
      ]
    },
    {
      name: 'Brand Colors',
      description: 'Primary brand colors used for interactive elements',
      colors: [
        { name: 'brand', value: '#0d99ff', textColor: 'white' },
        { name: 'brand-hover', value: '#0a7dd9', textColor: 'white' },
        { name: 'brand-pressed', value: '#007be5', textColor: 'white' },
        { name: 'brand-active', value: '#0966b3', textColor: 'white' },
        { name: 'brand-light-6', value: 'rgba(13, 153, 255, 0.06)' },
        { name: 'brand-light-10', value: 'rgba(13, 153, 255, 0.1)' },
      ]
    },
    {
      name: 'Text Colors',
      description: 'Text color hierarchy for content',
      colors: [
        { name: 'text-primary', value: 'rgba(0, 0, 0, 0.9)' },
        { name: 'text-secondary', value: 'rgba(0, 0, 0, 0.5)' },
        { name: 'text-tertiary', value: 'rgba(0, 0, 0, 0.4)' },
        { name: 'text-error', value: '#d73502', textColor: 'white' },
        { name: 'text-success', value: '#0d9c56', textColor: 'white' },
        { name: 'text-warning', value: '#f5a623', textColor: 'white' },
        { name: 'text-disabled', value: 'rgba(0, 0, 0, 0.3)' },
        { name: 'text-onBrand', value: '#ffffff', showBorder: true },
        { name: 'text-onDisabled', value: '#ffffff', showBorder: true },
      ]
    },
    {
      name: 'Background Colors',
      description: 'Background colors for surfaces and components',
      colors: [
        { name: 'bg-primary', value: '#ffffff', showBorder: true },
        { name: 'bg-secondary', value: 'rgba(0, 0, 0, 0.02)' },
        { name: 'bg-tertiary', value: 'rgba(0, 0, 0, 0.04)' },
        { name: 'bg-hover', value: 'rgba(0, 0, 0, 0.06)' },
        { name: 'bg-pressed', value: 'rgba(0, 0, 0, 0.08)' },
        { name: 'bg-active', value: 'rgba(0, 0, 0, 0.1)' },
        { name: 'bg-disabled', value: '#d9d9d9' },
        { name: 'bg-disabled-light', value: 'rgba(0, 0, 0, 0.06)' },
      ]
    },
    {
      name: 'Border Colors',
      description: 'Border colors for dividers and outlines',
      colors: [
        { name: 'border', value: 'rgba(0, 0, 0, 0.06)' },
        { name: 'border-light', value: 'rgba(0, 0, 0, 0.04)' },
        { name: 'border-medium', value: 'rgba(0, 0, 0, 0.1)' },
        { name: 'border-strong', value: 'rgba(0, 0, 0, 0.2)' },
        { name: 'border-focus', value: '#0d99ff', textColor: 'white' },
      ]
    },
    {
      name: 'Semantic Colors',
      description: 'Colors for status and feedback',
      colors: [
        { name: 'semantic-error', value: '#d73502', textColor: 'white' },
        { name: 'semantic-success', value: '#0d9c56', textColor: 'white' },
        { name: 'semantic-warning', value: '#f5a623', textColor: 'white' },
        { name: 'semantic-info', value: '#0d99ff', textColor: 'white' },
      ]
    },
    {
      name: 'Overlay Colors',
      description: 'Colors for shadows and overlays',
      colors: [
        { name: 'overlay-light', value: 'rgba(0, 0, 0, 0.04)' },
        { name: 'overlay-medium', value: 'rgba(0, 0, 0, 0.08)' },
        { name: 'overlay-heavy', value: 'rgba(0, 0, 0, 0.8)', textColor: 'white' },
      ]
    }
  ];

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
</script>

<div class="container">
  <header>
    <a href="/" class="back-link">
      <Icon name="chevron-down" size={16} />
      <Text variant="body">Back</Text>
    </a>
    <Text variant="display" as="h1" style="margin-top: 24px;">
      Colors
    </Text>
    <Text variant="body-large" color="secondary" style="margin-top: 16px; max-width: 800px;">
      The Figma UI3 color system provides a comprehensive palette for building consistent interfaces. 
      All colors are available as Tailwind CSS utilities.
    </Text>
  </header>

  <section class="usage-section">
    <Text variant="heading-2" as="h2">Usage in Tailwind CSS</Text>
    <div class="usage-examples">
      <div class="usage-example">
        <Text variant="body-strong">Text colors</Text>
        <code>text-brand text-text-primary text-semantic-error</code>
      </div>
      <div class="usage-example">
        <Text variant="body-strong">Background colors</Text>
        <code>bg-brand bg-bg-secondary bg-brand-light-10</code>
      </div>
      <div class="usage-example">
        <Text variant="body-strong">Border colors</Text>
        <code>border-border-medium border-brand border-semantic-success</code>
      </div>
    </div>
  </section>

  {#each colorGroups as group}
    <section class="color-group">
      <Text variant="heading-1" as="h2">{group.name}</Text>
      <Text variant="body" color="secondary" style="margin-bottom: 24px;">
        {group.description}
      </Text>
      
      <div class="color-grid">
        {#each group.colors as color}
          <button 
            class="color-item"
            class:has-border={color.showBorder}
            on:click={() => copyToClipboard(color.value)}
          >
            <div 
              class="color-swatch" 
              style="background-color: {color.value};"
            >
              {#if color.textColor}
                <Text variant="body-small" style="color: {color.textColor};">
                  {color.value}
                </Text>
              {/if}
            </div>
            <div class="color-info">
              <Text variant="body-strong">{color.name}</Text>
              <Text variant="body-small" color="secondary">{color.value}</Text>
              <div class="tailwind-class">
                <code>text-{color.name}</code>
                <code>bg-{color.name}</code>
              </div>
            </div>
          </button>
        {/each}
      </div>
    </section>
  {/each}

  <section class="examples-section">
    <Text variant="heading-1" as="h2">Examples</Text>
    <Text variant="body" color="secondary" style="margin-bottom: 32px;">
      Common color combinations and patterns
    </Text>

    <div class="example">
      <Text variant="body-strong">Buttons</Text>
      <div class="example-content">
        <button class="demo-button bg-brand text-text-onBrand hover:bg-brand-hover active:bg-brand-pressed">
          Primary Button
        </button>
        <button class="demo-button bg-bg-hover text-text-primary hover:bg-bg-pressed active:bg-bg-active">
          Secondary Button
        </button>
        <button class="demo-button bg-transparent text-brand hover:bg-brand-light-6 active:bg-brand-light-10">
          Tertiary Button
        </button>
        <button class="demo-button bg-bg-disabled text-text-onDisabled" disabled>
          Disabled Button
        </button>
      </div>
    </div>

    <div class="example">
      <Text variant="body-strong">Status Messages</Text>
      <div class="example-content">
        <div class="status-message bg-semantic-success text-white">
          <Icon name="check" size={16} color="white" />
          <Text variant="body" style="color: white;">Success message</Text>
        </div>
        <div class="status-message bg-semantic-error text-white">
          <Icon name="close" size={16} color="white" />
          <Text variant="body" style="color: white;">Error message</Text>
        </div>
        <div class="status-message bg-semantic-warning text-white">
          <Icon name="warning" size={16} color="white" />
          <Text variant="body" style="color: white;">Warning message</Text>
        </div>
        <div class="status-message bg-semantic-info text-white">
          <Icon name="info" size={16} color="white" />
          <Text variant="body" style="color: white;">Info message</Text>
        </div>
      </div>
    </div>

    <div class="example">
      <Text variant="body-strong">Cards</Text>
      <div class="example-content">
        <div class="demo-card bg-bg-primary border border-border">
          <Text variant="body-strong">Default Card</Text>
          <Text variant="body" color="secondary">Using primary background with default border</Text>
        </div>
        <div class="demo-card bg-bg-secondary border border-border-light">
          <Text variant="body-strong">Secondary Card</Text>
          <Text variant="body" color="secondary">Using secondary background with light border</Text>
        </div>
        <div class="demo-card bg-bg-tertiary border border-border-medium">
          <Text variant="body-strong">Tertiary Card</Text>
          <Text variant="body" color="tertiary">Using tertiary background with medium border</Text>
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

  .usage-section {
    margin-bottom: 64px;
    padding: 32px;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 12px;
  }

  .usage-examples {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  .usage-example {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .usage-example code {
    font-family: monospace;
    font-size: 12px;
    line-height: 20px;
    background: rgba(0, 0, 0, 0.04);
    padding: 8px 12px;
    border-radius: 6px;
  }

  .color-group {
    margin-bottom: 64px;
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .color-item {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
  }

  .color-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .color-item.has-border .color-swatch {
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .color-swatch {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .color-info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .tailwind-class {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .tailwind-class code {
    font-family: monospace;
    font-size: 10px;
    background: rgba(0, 0, 0, 0.04);
    padding: 4px 8px;
    border-radius: 4px;
  }

  .examples-section {
    margin-top: 80px;
  }

  .example {
    margin-bottom: 48px;
  }

  .example-content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
  }

  .demo-button {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 450;
    line-height: 16px;
    letter-spacing: 0.005em;
    transition: all 0.2s;
    cursor: pointer;
    border: none;
  }

  .demo-button:disabled {
    cursor: not-allowed;
    opacity: 1;
  }

  .status-message {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 6px;
  }

  .demo-card {
    padding: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 250px;
  }

  @media (max-width: 768px) {
    .color-grid {
      grid-template-columns: 1fr;
    }
  }
</style>