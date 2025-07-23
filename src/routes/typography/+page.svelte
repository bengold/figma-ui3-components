<script lang="ts">
  import Text from '$lib/components/Text.svelte';
  import Icon from '$lib/components/Icon.svelte';
</script>

<div class="container">
  <header>
    <a href="/" class="back-link">
      <Icon name="chevron-left" size={16} />
      <Text variant="body">Back</Text>
    </a>
    <Text variant="display" as="h1" style="margin-top: 24px;">
      Typography
    </Text>
    <Text variant="body-large" color="secondary" style="margin-top: 16px; max-width: 600px;">
      UI3 introduces type tokens for body text and headings organized around t-shirt sizes — large, medium, small — to allow designers to easily construct multiple levels of hierarchy.
    </Text>
  </header>

  <section class="typography-section">
    <Text variant="heading-1" as="h2">Headings</Text>
    <Text variant="body" color="secondary" style="margin-bottom: 32px;">
      Headings use a combination of Whyte for display and Inter for hierarchical text.
    </Text>

    <div class="type-specimen">
      <div class="specimen-info">
        <Text variant="body-small" color="tertiary">heading/display</Text>
        <Text variant="body-small" color="secondary">Whyte Medium • 48/56 • -0.03em</Text>
      </div>
      <Text variant="display" as="p">
        Large display size for expressive moments and important announcements
      </Text>
    </div>

    <div class="type-specimen">
      <div class="specimen-info">
        <Text variant="body-small" color="tertiary">heading/heading.large</Text>
        <Text variant="body-small" color="secondary">Inter Semi Bold • 24/32 • -0.017em</Text>
      </div>
      <Text variant="heading-1" as="p">
        Large heading (24/32)
      </Text>
    </div>

    <div class="type-specimen">
      <div class="specimen-info">
        <Text variant="body-small" color="tertiary">heading/heading.medium</Text>
        <Text variant="body-small" color="secondary">Inter Semi Bold • 15/25 • -0.0037em</Text>
      </div>
      <Text variant="heading-2" as="p">
        Medium heading (15/25)
      </Text>
    </div>

    <div class="type-specimen">
      <div class="specimen-info">
        <Text variant="body-small" color="tertiary">heading/heading.small</Text>
        <Text variant="body-small" color="secondary">Inter Semi Bold • 13/22 • -0.0025em</Text>
      </div>
      <Text variant="heading-3" as="p">
        Small heading (13/22)
      </Text>
    </div>
  </section>

  <section class="typography-section">
    <Text variant="heading-1" as="h2">Body Text</Text>
    <Text variant="body" color="secondary" style="margin-bottom: 32px;">
      Body text uses Inter with regular and strong variants for emphasis.
    </Text>

    <div class="body-row">
      <div class="type-specimen">
        <div class="specimen-info">
          <Text variant="body-small" color="tertiary">body/body.large</Text>
          <Text variant="body-small" color="secondary">Inter Regular • 13/22 • -0.0025em</Text>
        </div>
        <Text variant="body-large" as="p">
          Body Large (13/22) - Our largest body text size, usually saved for elements like multiline text.
        </Text>
      </div>

      <div class="type-specimen">
        <div class="specimen-info">
          <Text variant="body-small" color="tertiary">body/body.large.strong</Text>
          <Text variant="body-small" color="secondary">Inter Medium • 13/22 • -0.0025em</Text>
        </div>
        <Text variant="body-large-strong" as="p">
          Body Large Strong (13/22) - Emphasized version for important content.
        </Text>
      </div>
    </div>

    <div class="body-row">
      <div class="type-specimen">
        <div class="specimen-info">
          <Text variant="body-small" color="tertiary">body/body.medium</Text>
          <Text variant="body-small" color="secondary">Inter Regular • 11/16 • 0.005em</Text>
        </div>
        <Text variant="body" as="p">
          Body Medium (11/16) - Our default text size for the majority of UI elements in the editor, such as inputs and buttons.
        </Text>
      </div>

      <div class="type-specimen">
        <div class="specimen-info">
          <Text variant="body-small" color="tertiary">body/body.medium.strong</Text>
          <Text variant="body-small" color="secondary">Inter Semi Bold • 11/16 • 0.005em</Text>
        </div>
        <Text variant="body-strong" as="p">
          Body Medium Strong (11/16) - Emphasized default text.
        </Text>
      </div>
    </div>

    <div class="body-row">
      <div class="type-specimen">
        <div class="specimen-info">
          <Text variant="body-small" color="tertiary">body/body.small</Text>
          <Text variant="body-small" color="secondary">Inter Regular • 9/14 • 0.005em</Text>
        </div>
        <Text variant="body-small" as="p">
          Body Small (9/14) - Our smallest text size, primarily used by small UI elements like avatars and badges
        </Text>
      </div>

      <div class="type-specimen">
        <div class="specimen-info">
          <Text variant="body-small" color="tertiary">body/body.small.strong</Text>
          <Text variant="body-small" color="secondary">Inter Medium • 9/14 • 0.005em</Text>
        </div>
        <Text variant="body-small-strong" as="p">
          Body Small Strong (9/14) - Emphasized small text.
        </Text>
      </div>
    </div>
  </section>

  <section class="typography-section">
    <Text variant="heading-1" as="h2">Color Variants</Text>
    <Text variant="body" color="secondary" style="margin-bottom: 32px;">
      Text colors provide semantic meaning and hierarchy.
    </Text>

    <div class="color-grid">
      <div class="color-specimen">
        <Text variant="body-large">Primary text (90% opacity)</Text>
        <Text variant="body-small" color="secondary">Default text color</Text>
      </div>
      <div class="color-specimen">
        <Text variant="body-large" color="secondary">Secondary text (50% opacity)</Text>
        <Text variant="body-small" color="secondary">Supporting information</Text>
      </div>
      <div class="color-specimen">
        <Text variant="body-large" color="tertiary">Tertiary text (40% opacity)</Text>
        <Text variant="body-small" color="secondary">Disabled or placeholder</Text>
      </div>
      <div class="color-specimen">
        <Text variant="body-large" color="error">Error text</Text>
        <Text variant="body-small" color="secondary">Error messages</Text>
      </div>
      <div class="color-specimen">
        <Text variant="body-large" color="success">Success text</Text>
        <Text variant="body-small" color="secondary">Success messages</Text>
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

  .typography-section {
    margin-bottom: 80px;
  }

  .type-specimen {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 24px;
  }

  .specimen-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  .body-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    .body-row {
      grid-template-columns: 1fr;
    }
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 24px;
  }

  .color-specimen {
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
</style>