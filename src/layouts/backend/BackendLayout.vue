<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.svg'
import {
  Home,
  Folder,
  Users,
  Settings,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  LogOut,
  ChartCandlestickIcon,
  Check,
  ChartPie,
  SettingsIcon
} from 'lucide-vue-next'

const projectsOpen = ref(false)
const profileOpen = ref(false)
</script>
<template>
  <div class="bg-gray-50 font-sans text-gray-800">
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-56 bg-white border-r border-gray-200 flex flex-col">
        <!-- Sidebar Header -->
        <div class="h-20 flex items-center justify-center border-b border-gray-200">
          <div class="w-36">
            <img :src="logo" alt="Profile" class="rounded-md w-full h-full" />
          </div>
        </div>
        <!-- Sidebar Navigation -->
        <nav class="flex-1 px-2 py-4 space-y-2 text-sm">
          <RouterLink to="/admin" href="#" class="flex items-center py-2 px-3 text-gray-700 rounded-md hover:bg-[#ff3434]/10 transition">
            <Home class="w-5 h-5 mr-3 text-[#ff3434]" /> Home
          </RouterLink>
          <!-- Projects dropdown -->
          <div class="space-y-1">
            <button @click="projectsOpen = !projectsOpen"
              class="w-full flex items-center justify-between py-2 px-3 text-gray-700 rounded-md hover:bg-[#ff3434]/10 transition">
              <div class="flex items-center">
                <Folder class="w-5 h-5 mr-3 text-[#ff3434]" /> Projects
              </div>
              <ChevronDown :class="{ 'rotate-180': projectsOpen }"
                class="w-4 h-4 transform transition-transform duration-300" />
            </button>
            <transition enter-active-class="transition ease-out duration-500" enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-40" leave-active-class="transition ease-in duration-500"
              leave-from-class="opacity-100 max-h-40" leave-to-class="opacity-0 max-h-0">
              <div v-show="projectsOpen" class="overflow-hidden ml-4 mt-1 space-y-1 text-sm">
                <a href="#"
                  class="flex items-center py-2 px-3 text-gray-600 rounded-md hover:bg-[#ff3434]/10 transition">
                  <Check class="w-4 h-4 mr-3 text-[#ff3434]" /> Active Projects
                </a>
                <a href="#"
                  class="flex items-center py-2 px-3 text-gray-600 rounded-md hover:bg-[#ff3434]/10 transition">
                  <Check class="w-4 h-4 mr-3 text-[#ff3434]" /> Archived Projects
                </a>
              </div>
            </transition>
          </div>
          <a href="#" class="flex items-center py-2 px-3 text-gray-700 rounded-md hover:bg-[#ff3434]/10 transition">
            <ChartPie class="w-5 h-5 mr-3 text-[#ff3434]" /> Analytics
          </a>
          <RouterLink to="/admin/setting" href="#" class="flex items-center py-2 px-3 text-gray-700 rounded-md hover:bg-[#ff3434]/10 transition">
            <Settings class="w-5 h-5 mr-3 text-[#ff3434]" /> Settings
          </RouterLink>
        </nav>
      </aside>
      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <header class="h-20 bg-white border-b border-gray-200 px-6 flex justify-between items-center">
          <div>
            <h2 class="text-2xl font-semibold text-gray-800">Dashboard</h2>
          </div>
          <div class="flex items-center space-x-3">
            <!-- Search -->
            <div class="relative">
              <input type="text" placeholder="Search..."
                class="pl-10 pr-4 py-1 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
              <svg class="w-5 h-5 absolute left-3 top-[8px] text-gray-400" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <!-- Quick Buttons -->
            <button class="p-2 rounded-full hover:bg-gray-100 transition">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button class="p-2 rounded-full hover:bg-gray-100 transition">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h6m-2-4h0a2 2 0 012 2v0a2 2 0 01-2 2h0a2 2 0 01-2-2v0a2 2 0 012-2z" />
              </svg>
            </button>
            <!-- Profile Dropdown -->
            <div class="relative">
              <button @click="profileOpen = !profileOpen" class="flex items-center space-x-2 focus:outline-none">
                <img src="https://i.pravatar.cc/40" alt="Profile"
                  class="w-8 h-8 rounded-md border-2 border-[#ff3434]" />
                <span class="text-gray-800 font-medium">John Doe</span>
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="fade">
                <div v-show="profileOpen" @click.outside="profileOpen = false"
                  class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md py-2 z-10">
                  <a href="#" class="block px-4 py-2 hover:bg-[#ff3434]/10">Profile</a>
                  <a href="#" class="block px-4 py-2 hover:bg-[#ff3434]/10">Settings</a>
                  <a href="#" class="block px-4 py-2 hover:bg-[#ff3434]/10">Logout</a>
                </div>
              </transition>
            </div>
          </div>
        </header>
        <RouterView />
      </div>
    </div>
  </div>
</template>