<script lang="ts">
  interface Props {
    checked?: boolean;
    disabled?: boolean;
    onchange?: (checked: boolean) => void;
  }
  
  const { checked = false, disabled = false, onchange }: Props = $props();
  
  let isChecked = $state(checked);
  
  function handleClick() {
    if (!disabled) {
      isChecked = !isChecked;
      onchange?.(isChecked);
    }
  }
</script>

<button 
  class="switch" 
  class:switch--checked={isChecked}
  class:switch--disabled={disabled}
  {disabled}
  onclick={handleClick}
  type="button"
  role="switch"
  aria-checked={isChecked}
  aria-label="Toggle switch"
>
  <span class="switch__thumb"></span>
</button>

<style>
  .switch {
    position: relative;
    width: 44px;
    height: 24px;
    background-color: #ccc;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 0;
  }
  
  .switch--checked {
    background-color: #4caf50;
  }
  
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .switch__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .switch--checked .switch__thumb {
    transform: translateX(20px);
  }
</style>