<script setup>
import {
  SettingsIcon,
  Palette,
  Shield,
  Bell,
  SlidersHorizontal,
} from 'lucide-vue-next'
import { ref, reactive } from 'vue'

const activeTab = ref('general')

const menuItems = [
  { key: 'general', label: 'General', icon: SettingsIcon },
  { key: 'appearance', label: 'Appearance', icon: Palette },
  { key: 'security', label: 'Security', icon: Shield },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'advanced', label: 'Advanced', icon: SlidersHorizontal },
]

// Input definitions (value নেই, শুধু metadata)
const settingsFields = {
  general: [
    { type: 'text', label: 'App Name', key: 'appName', placeholder: 'My Application' },
    { type: 'text', label: 'App URL', key: 'appUrl', placeholder: 'https://example.com' },
    { type: 'email', label: 'Support Email', key: 'supportEmail', placeholder: 'support@example.com' },
    { type: 'select', label: 'Timezone', key: 'timezone', options: ['UTC', 'Asia/Dhaka', 'America/New_York'] },
  ],
  appearance: [
    { type: 'color', label: 'Primary Color', key: 'primaryColor' },
    { type: 'file', label: 'Logo Upload', key: 'logo' },
  ],
  security: [
    { type: 'password', label: 'New Password', key: 'newPassword' },
    { type: 'checkbox', label: 'Enable 2FA', key: 'enable2FA' },
  ],
  notifications: [
    { type: 'checkbox', label: 'Email Notifications', key: 'emailNotifications' },
    { type: 'checkbox', label: 'SMS Notifications', key: 'smsNotifications' },
  ],
  advanced: [
    { type: 'text', label: 'API Endpoint', key: 'apiEndpoint', placeholder: 'https://api.example.com' },
  ]
}

// Initial state (value রাখবে)
const initialState = reactive({
  general: {
    appName: 'My Application',
    appUrl: 'https://example.com',
    supportEmail: 'support@example.com',
    timezone: 'UTC',
  },
  appearance: {
    primaryColor: '#ff3434',
    logo: null,
  },
  security: {
    newPassword: '',
    enable2FA: false,
  },
  notifications: {
    emailNotifications: true,
    smsNotifications: false,
  },
  advanced: {
    apiEndpoint: 'https://api.example.com',
  }
})

// Submit ফাংশন
function saveSettings() {
  console.log('Saving settings:', initialState)
  // এখানে axios/post call করতে পারেন
  // axios.post('/api/settings', initialState)
}
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
          <form @submit.prevent="saveSettings" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(field, index) in settingsFields[activeTab]" :key="index">
                <label class="block text-sm font-medium text-gray-700 mb-1">{{ field.label }}</label>

                <!-- Text, Email, Password, Color, File -->
                <input
                  v-if="['text','email','password','color','file'].includes(field.type)"
                  :type="field.type"
                  v-model="initialState[activeTab][field.key]"
                  :placeholder="field.placeholder"
                  class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
                />

                <!-- Select -->
                <select
                  v-else-if="field.type === 'select'"
                  v-model="initialState[activeTab][field.key]"
                  class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
                >
                  <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
                </select>

                <!-- Checkbox -->
                <div v-else-if="field.type === 'checkbox'" class="flex items-center gap-2">
                  <input type="checkbox" v-model="initialState[activeTab][field.key]" class="h-4 w-4 text-[#ff3434] border-gray-300 rounded"/>
                  <span>{{ field.label }}</span>
                </div>
              </div>
            </div>

            <button type="submit"
              class="bg-[#ff3434] text-white px-6 py-2 rounded-md hover:bg-[#e02d2d] transition shadow-sm">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
