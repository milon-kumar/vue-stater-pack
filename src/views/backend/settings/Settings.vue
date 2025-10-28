<script setup>
import {
  SettingsIcon,
  Palette,
  Shield,
  Bell,
  SlidersHorizontal,
} from 'lucide-vue-next'
import { ref } from 'vue'

const activeTab = ref('general')

const menuItems = [
  { key: 'general', label: 'General', icon: SettingsIcon },
  { key: 'appearance', label: 'Appearance', icon: Palette },
  { key: 'security', label: 'Security', icon: Shield },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'advanced', label: 'Advanced', icon: SlidersHorizontal },
]
</script>
<template>
  <main class="flex-1 p-6 space-y-6">
    <section class="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <SettingsIcon class="w-5 h-5 mr-2 text-[#ff3434]" /> Settings
      </h2>
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Left Sidebar -->
        <aside class="w-full md:w-64 border border-gray-200 rounded-xl p-4 space-y-2 bg-gray-50">
          <button v-for="item in menuItems" :key="item.key" @click="activeTab = item.key" :class="[
            'flex items-center w-full text-left px-3 py-2 rounded-lg transition',
            activeTab === item.key
              ? 'bg-[#ff3434]/10 text-[#ff3434] font-semibold'
              : 'hover:bg-gray-100 text-gray-700'
          ]">
            <component :is="item.icon" class="w-5 h-5 mr-3 text-[#ff3434]" />
            <span>{{ item.label }}</span>
          </button>
        </aside>
        <!-- Right Content -->
        <div class="flex-1 border border-gray-200 rounded-xl p-6">
          <div v-if="activeTab === 'general'" class="space-y-6">
            <h3 class="text-lg font-medium text-gray-800 mb-4">General Settings</h3>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">App Name</label>
                  <input type="text"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
                    placeholder="My Application" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">App URL</label>
                  <input type="text"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
                    placeholder="https://example.com" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                  <input type="email"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
                    placeholder="support@example.com" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                  <select
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]">
                    <option>UTC</option>
                    <option>Asia/Dhaka</option>
                    <option>America/New_York</option>
                  </select>
                </div>
              </div>
              <button type="submit"
                class="bg-[#ff3434] text-white px-6 py-2 rounded-md hover:bg-[#e02d2d] transition shadow-sm"> Save
                Changes </button>
            </form>
          </div>
          <div v-else-if="activeTab === 'appearance'" class="space-y-6">
            <h3 class="text-lg font-medium text-gray-800 mb-4">Appearance Settings</h3>
            <p class="text-gray-500 text-sm"> Customize colors, logos, and layout options here. </p>
          </div>
          <div v-else-if="activeTab === 'security'" class="space-y-6">
            <h3 class="text-lg font-medium text-gray-800 mb-4">Security Settings</h3>
            <p class="text-gray-500 text-sm"> Manage passwords, sessions, and 2FA here. </p>
          </div>
          <div v-else-if="activeTab === 'notifications'" class="space-y-6">
            <h3 class="text-lg font-medium text-gray-800 mb-4">Notification Settings</h3>
            <p class="text-gray-500 text-sm"> Control how and when you get notifications. </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
