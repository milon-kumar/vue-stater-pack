<script setup>
import { ref, watch, computed } from 'vue'
import { CheckCheckIcon } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const firstName = ref("Alexcen")
const lastName = ref("Jafer")


const fullName = computed(() => {
  return `${firstName?.value} - ${lastName?.value}`
})

watch([firstName, lastName], () => {
  console.log("Hit on watch ->>", {
    firstName: firstName?.value,
    lastName: lastName?.value,
  })
})

const handleClear = () => {
  firstName.value = "Alexcen"
  lastName.value = "Jafer"
}


</script>
<template>
  <main class="p-6 space-y-6">
    <section class="bg-white shadow-sm rounded-xl p-6 border border-gray-200 w-full">
      <!-- Heading with Icon -->
      <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <CheckCheckIcon class="w-5 h-5 mr-2 text-[#ff3434]" /> Check Watch & Computed Property
      </h2>
      <div class="my-2">
        <p>First name : {{ firstName }}</p>
        <p>Last name : {{ lastName }}</p>
        <p>** Full name : {{ fullName }}</p>
      </div>
    </section>
    <div class="grid grid-cols-3 gap-6">
      <input type="text" v-model="firstName" placeholder="First name"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
      <input type="text" v-model="lastName" placeholder="Last name"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />

          <Button
            variant="solid"
            size="md"
            label="Clear All"
            @click="handleClear()"
          />
    </div>
  </main>
</template>