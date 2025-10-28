
<script setup>
import heroImage from "@/assets/hero.svg"
import {
  ChevronDown,
  Zap,
  ShieldCheck,
  SettingsIcon,
} from 'lucide-vue-next'
import { ref } from 'vue'

const isLoggedIn = ref(false)
const user = ref({
  name: 'Milon Kumar',
  email: 'milon@example.com',
})

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value
}

const loginUser = () => {
  isLoggedIn.value = true
}

const logoutUser = () => {
  isLoggedIn.value = false
}

const features = [
  {
    title: 'Lightning Fast',
    desc: 'Experience seamless performance optimized for speed and reliability.',
    icon: Zap,
  },
  {
    title: 'Secure by Design',
    desc: 'Your data is protected with enterprise-grade security and encryption.',
    icon: ShieldCheck,
  },
  {
    title: 'Easy Customization',
    desc: 'Tailor your experience with flexible configuration and settings.',
    icon: SettingsIcon,
  },
]
</script>



<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- 🌟 HEADER -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" class="w-28 h-auto" />
        </div>

        <nav class="hidden md:flex items-center space-x-6 font-medium">
          <a href="#" class="hover:text-[#ff3434] transition">Home</a>
          <a href="#" class="hover:text-[#ff3434] transition">Features</a>
          <a href="#" class="hover:text-[#ff3434] transition">Pricing</a>
          <a href="#" class="hover:text-[#ff3434] transition">Contact</a>
        </nav>

        <!-- Login/Profile -->
        <div>
          <template v-if="isLoggedIn">
            <div class="flex items-center space-x-3 cursor-pointer group">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="User"
                class="w-9 h-9 rounded-full border-2 border-[#ff3434]"
              />
              <div class="hidden md:block">
                <p class="text-sm font-semibold">{{ user.name }}</p>
                <p class="text-xs text-gray-500">{{ user.email }}</p>
              </div>
              <ChevronDown class="w-4 h-4 text-gray-500 group-hover:text-[#ff3434]" />
            </div>
          </template>
          <template v-else>
            <button
              class="bg-[#ff3434] text-white px-5 py-2 rounded-md hover:bg-[#e02d2d] transition shadow-sm"
              @click="toggleLogin"
            >
              Login
            </button>
          </template>
        </div>
      </div>
    </header>

    <!-- 🌈 HERO SECTION -->
    <section class="bg-white py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span class="text-[#ff3434]">Dynamatic</span> — Build Faster, Grow Smarter 🚀
          </h1>
          <p class="text-gray-600 text-lg">
            Streamline your workflow with cutting-edge tools designed for speed, collaboration, and impact.
          </p>
          <div class="flex justify-center md:justify-start space-x-4">
            <button
              class="bg-[#ff3434] text-white px-6 py-3 rounded-md hover:bg-[#e02d2d] transition"
            >
              Get Started
            </button>
            <button
              class="border border-[#ff3434] text-[#ff3434] px-6 py-3 rounded-md hover:bg-[#ff3434]/10 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        <div class="flex-1 flex justify-center">
          <img
            :src="heroImage"
            alt="Hero"
            class="w-80 md:w-96"
          />
        </div>
      </div>
    </section>

    <!-- 💎 FEATURES -->
    <section class="py-20 bg-gray-50 border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-semibold text-center text-gray-900 mb-12">
          Why Choose <span class="text-[#ff3434]">Dynamatic</span>?
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <component :is="feature.icon" class="w-10 h-10 text-[#ff3434] mb-4" />
            <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 🔐 LOGIN OR PROFILE SECTION -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <template v-if="!isLoggedIn">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-3">Login to Your Account</h2>
            <p class="text-gray-500">Access your dashboard and manage your projects.</p>
          </div>

          <form
            @submit.prevent="loginUser"
            class="max-w-md mx-auto bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
            />
            <input
              type="password"
              placeholder="Password"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
            />
            <button
              type="submit"
              class="w-full bg-[#ff3434] text-white py-2 rounded-md hover:bg-[#e02d2d] transition"
            >
              Login
            </button>
          </form>
        </template>

        <template v-else>
          <div
            class="bg-gray-50 border border-gray-200 p-8 rounded-xl shadow-sm text-center space-y-4"
          >
            <img
              src="https://i.pravatar.cc/100?img=12"
              class="w-20 h-20 rounded-full mx-auto border-4 border-[#ff3434]"
              alt="Profile"
            />
            <h3 class="text-xl font-semibold">{{ user.name }}</h3>
            <p class="text-gray-500">{{ user.email }}</p>
            <button
              @click="logoutUser"
              class="mt-4 bg-[#ff3434] text-white px-6 py-2 rounded-md hover:bg-[#e02d2d] transition"
            >
              Logout
            </button>
          </div>
        </template>
      </div>
    </section>

    <!-- 🌍 FOOTER -->
    <footer class="bg-gray-900 text-gray-400 py-8 mt-auto">
      <div class="max-w-6xl mx-auto px-6 text-center space-y-3">
        <p>© 2025 Dynamatic. All rights reserved.</p>
        <div class="flex justify-center space-x-6 text-sm">
          <a href="#" class="hover:text-white transition">Privacy Policy</a>
          <a href="#" class="hover:text-white transition">Terms</a>
          <a href="#" class="hover:text-white transition">Support</a>
        </div>
      </div>
    </footer>
  </div>
</template>

