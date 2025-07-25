<script lang="ts">
  import Text from '$lib/components/text/text.svelte';
  import Icon from '$lib/components/icon/icon.svelte';
  import Button from '$lib/components/button/button.svelte';
</script>

<div class="container">
  <header>
    <Text variant="display" as="h1">
      Figma UI3 Component Library
    </Text>
    <Text variant="body-large" color="secondary" style="margin-top: 16px; max-width: 600px;">
      A Svelte component library based on Figma's UI3 design system. Browse the components below or check out the Storybook for interactive examples.
    </Text>
  </header>

  <nav>
    <Text variant="heading-2" as="h2" style="margin-bottom: 24px;">
      Components
    </Text>
    <div class="nav-grid">
      <a href="/typography" class="nav-card">
        <div class="nav-icon">
          <Text variant="display" color="primary">Aa</Text>
        </div>
        <Text variant="body-large-strong">Typography</Text>
        <Text variant="body-small" color="secondary">
          Text components and typography system
        </Text>
      </a>
      
      <a href="/icons" class="nav-card">
        <div class="nav-icon">
          <Icon name="star" size={32} />
        </div>
        <Text variant="body-large-strong">Icons</Text>
        <Text variant="body-small" color="secondary">
          Icon library with multiple sizes and colors
        </Text>
      </a>
      
      <a href="/colors" class="nav-card">
        <div class="nav-icon" style="background: linear-gradient(135deg, #0d99ff 0%, #007be5 100%);">
          <Icon name="tint" size={32} color="white" />
        </div>
        <Text variant="body-large-strong">Colors</Text>
        <Text variant="body-small" color="secondary">
          Complete Figma UI3 color system
        </Text>
      </a>
    </div>
  </nav>

  <section class="preview">
    <Text variant="heading-2" as="h2" style="margin-bottom: 24px;">
      Quick Preview
    </Text>
    
    <div class="preview-section">
      <Text variant="body-strong" style="margin-bottom: 16px;">Text Styles</Text>
      <div class="preview-items">
        <Text variant="heading-1">Heading Large (24/32)</Text>
        <Text variant="body">Body Medium (11/16) - Default text</Text>
        <Text variant="body-small" color="secondary">Body Small (9/16) - Secondary text</Text>
      </div>
    </div>

    <div class="preview-section">
      <Text variant="body-strong" style="margin-bottom: 16px;">Common Icons</Text>
      <div class="icon-grid">
        <Icon name="check" color="success" />
        <Icon name="close" color="error" />
        <Icon name="search" />
        <Icon name="settings" />
        <Icon name="chevron-down" />
        <Icon name="plus" />
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

  header {
    margin-bottom: 64px;
  }

  nav {
    margin-bottom: 64px;
  }

  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }

  .nav-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .nav-card:hover {
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    margin-bottom: 8px;
  }

  .preview-section {
    margin-bottom: 48px;
  }

  .preview-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .icon-grid {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
</style>