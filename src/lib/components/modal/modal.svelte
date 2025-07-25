<script lang="ts">
  interface Props {
    open?: boolean;
    title?: string;
    children: any;
  }
  
  const { open = false, title = '', children }: Props = $props();
</script>

{#if open}
  <div class="modal-backdrop">
    <div class="modal">
      {#if title}
        <div class="modal__header">
          <h2>{title}</h2>
        </div>
      {/if}
      <div class="modal__content">
        {@render children()}
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 90%;
  }
  
  .modal__header {
    padding: 16px 24px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .modal__header h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
  
  .modal__content {
    padding: 24px;
  }
</style>