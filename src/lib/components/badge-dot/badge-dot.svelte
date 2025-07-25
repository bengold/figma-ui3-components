<script lang="ts">
  import './badge-dot.css';
  
  interface Props {
    /** Color variant of the dot */
    variant?: 'default' | 'brand' | 'success' | 'danger' | 'warning' | 'neutral';
    /** Size of the dot badge */
    size?: 'small' | 'medium';
    /** Custom class names */
    class?: string;
  }
  
  const { 
    variant = 'brand',
    size = 'small',
    class: className,
    ...restProps
  }: Props = $props();
  
  const classNames = $derived([
    'figma-badge-dot',
    `figma-badge-dot--${variant}`,
    `figma-badge-dot--${size}`,
    className
  ].filter(Boolean).join(' '));
</script>

<span class={classNames} {...restProps}>
  <span class="figma-badge-dot__dot" />
</span>