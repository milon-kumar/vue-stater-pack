<script setup>
import { ref, reactive,watch, computed } from 'vue'
import { CheckCheckIcon } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const firstName = ref("Alexcen")
const lastName = ref("Jafer")
const buttonEvent = ref(null)

const userProfile = reactive({
  firstName: '',
  lastName: '',
  email: '',
  avater: '',
  details: '',
})

const fullName = computed(() => {
  return `${firstName?.value} - ${lastName?.value}`
})

watch([firstName, lastName], () => {
  console.log("Hit on watch ->>", {
    firstName: firstName?.value,
    lastName: lastName?.value,
  })
})

const handleClear = (e) => {
  console.log("Event  ss ->>", e.target)

  firstName.value = "Alexcen"
  lastName.value = "Jafer"

  buttonEvent.value = e.target
}

const handleClick = (e) => {
  console.log('Clicked button:', e.target)
}

const handlePressEnter = () => {
  console.log("Handle press enter...");

}


watch(userProfile, () => {
  console.log('user profile ->>',userProfile)
})

</script>
<template>
  <main class="p-6 space-y-6">
    <section class="bg-white rounded-xl p-6 border border-gray-200 w-full">
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
    <div class="bg-white p-6 grid grid-cols-3 gap-6 rounded-xl border border-gray-200">
      <input type="text" v-model="firstName" placeholder="First name"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
      <input type="text" v-model="lastName" placeholder="Last name"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
      <input type="text" v-model="lastName" placeholder="Please press enter" @keyup.enter="handlePressEnter"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
      <Button variant="solid" size="md" label="Clear All" @handleClick="handleClear" />
      <button @click="handleClick($event)">Click me</button>
    </div>
    <section class="bg-white rounded-xl p-6 border border-gray-200 w-full">
      <!-- Heading -->
      <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <User class=" text-[#ff3434]" /> User Profile
      </h2>
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Left: Form Section -->
        <form class="w-full md:w-1/2 space-y-4 border border-gray-200 rounded-xl p-4 bg-gray-50">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" placeholder="Enter first name" v-model="userProfile.firstName"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" placeholder="Enter last name" v-model="userProfile.lastName"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Enter email" v-model="userProfile.email"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Avatar URL</label>
            <input type="text" placeholder="Enter image URL" v-model="userProfile.avater"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea 
              v-model="userProfile.details"
            placeholder="Short bio"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" 
              rows="3"></textarea>
          </div>
          <button type="submit"
            class="bg-[#ff3434] text-white px-6 py-2 rounded-md hover:bg-[#e02d2d] transition shadow-sm"> Save Profile
          </button>
        </form>
        <!-- Right: Preview Section -->
        <div
          class="w-full md:w-1/2 border border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center space-y-4">
          <div class="w-24 h-24 rounded-full bg-gray-300"></div>
          <h3 class="text-lg font-semibold text-gray-800">{{ userProfile.firstName }}</h3>
          <p class="text-gray-500 text-sm">{{ userProfile.email }}</p>
          <p class="text-gray-600 text-sm text-center">{{ userProfile.details }}</p>
        </div>
      </div>
    </section>
  </main>
</template>