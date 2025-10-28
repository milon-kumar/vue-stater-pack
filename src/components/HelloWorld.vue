<script setup>
import { ref, reactive , watch , computed } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const countReactive = reactive({ value: 10 })


const addCountWithReactive = computed(() => {
  console.log('Action here...')
  return countReactive.value + count.value
})

const handleListFetch = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log('Fetched data ->> ', data)
  } catch (error) {
    console.error('Error fetching data ->> ', error)
  }
}

watch(count, (newVal) => {
  //handleListFetch()
  //console.log('Count changed to ->> ', newVal)
  console.log('Computed value ->>', addCountWithReactive?.value)

})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
