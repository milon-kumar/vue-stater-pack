<template>
  <button :class="computedClass" @click="$emit('click')">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'solid' },
  size: { type: String, default: 'md' },
  label: { type: String, default: 'Button' },
  color: { type: String, default: '#ff3434' }
})

const sizeMap = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

const computedClass = computed(() => {
  let base = `rounded-md font-medium transition focus:outline-none ${sizeMap[props.size]}`
  switch (props.variant) {
    case 'solid':
      base += ` bg-[${props.color}] text-white hover:bg-[#e02d2d]`
      break
    case 'outline':
      base += ` border border-[${props.color}] text-[${props.color}] hover:bg-[${props.color}]/10`
      break
    case 'ghost':
      base += ` bg-transparent text-[${props.color}] hover:bg-[${props.color}]/10`
      break
    case 'link':
      base += ` bg-transparent text-[${props.color}] underline hover:text-[#e02d2d]`
      break
  }
  return base
})
</script>
