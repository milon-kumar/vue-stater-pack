<script setup>
import {ref} from 'vue'
import { Activity } from 'lucide-vue-next'

const count = ref(0)


const increment = () => {
    count.value ++
}

const decrement = () => {
    count.value --
}

const reset = () => {
    count.value = 0
  }
</script>

<template>
  <main class="p-6 space-y-6">
    <section class="bg-white shadow-sm rounded-xl p-6 border border-gray-200 w-full">
      
      <!-- Heading with Icon -->
      <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Activity class="w-5 h-5 mr-2 text-[#ff3434]" />
        Counter
      </h2>

      <!-- Counter Static UI -->
      <div class="w-full bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center space-y-4">
        <!-- Counter Display -->
        <p class="text-5xl font-bold text-[#ff3434]">{{ count }}</p>

        <!-- Buttons -->
        <div class="flex gap-4">
          <button @click="decrement()" class="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">-</button>
          <button @click="reset()" class="px-6 py-2 bg-[#ff3434] text-white rounded-lg hover:bg-[#e02d2d] transition">Reset</button>
          <button @click="increment()" class="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">+</button>
        </div>
      </div>

    </section>
  </main>
</template>


