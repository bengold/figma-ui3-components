<script lang="ts">
  interface Props {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
  }
  
  const { src = '', alt = 'Avatar', size = 'medium' }: Props = $props();
</script>

<div class="avatar avatar--{size}">
  {#if src}
    <img {src} {alt} />
  {:else}
    <span class="avatar__placeholder">A</span>
  {/if}
</div>

<style>
  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: #e0e0e0;
  }
  
  .avatar--small {
    width: 24px;
    height: 24px;
  }
  
  .avatar--medium {
    width: 32px;
    height: 32px;
  }
  
  .avatar--large {
    width: 48px;
    height: 48px;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .avatar__placeholder {
    font-size: 14px;
    font-weight: 500;
    color: #666;
  }
</style>