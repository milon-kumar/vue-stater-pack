<script setup>
import { CheckSquare } from 'lucide-vue-next'
</script>

<template>
  <main class="p-6 space-y-6 bg-gray-100 min-h-screen">
    <section class="bg-white shadow-sm rounded-xl p-6 border border-gray-200 w-full">
      
      <!-- Heading -->
      <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <CheckSquare class="w-5 h-5 mr-2 text-[#ff3434]" />
        Task Management
      </h2>

      <div class="flex flex-col md:flex-row gap-6">
        <!-- Left Sidebar -->
        <aside class="w-full md:w-64 border border-gray-200 rounded-xl p-4 space-y-4 bg-gray-50">
          <h3 class="text-gray-700 font-semibold mb-2">Categories</h3>
          <ul class="space-y-2">
            <li class="px-3 py-2 rounded-lg hover:bg-[#ff3434]/10 cursor-pointer text-gray-700">All Tasks</li>
            <li class="px-3 py-2 rounded-lg hover:bg-[#ff3434]/10 cursor-pointer text-gray-700">Pending</li>
            <li class="px-3 py-2 rounded-lg hover:bg-[#ff3434]/10 cursor-pointer text-gray-700">In Progress</li>
            <li class="px-3 py-2 rounded-lg hover:bg-[#ff3434]/10 cursor-pointer text-gray-700">Completed</li>
          </ul>
        </aside>

        <!-- Right Content: Task List -->
        <div class="flex-1 space-y-4">
          <!-- Task Card -->
          <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-1">Design Landing Page</h4>
              <p class="text-gray-500 text-sm mb-2">Create mockups and wireframes for the new landing page.</p>
              <span class="text-xs text-gray-400">Due: Oct 30, 2025</span>
            </div>
            <span class="px-2 py-1 bg-[#ff3434] text-white rounded-full text-xs font-medium">In Progress</span>
          </div>

          <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-1">Setup Database</h4>
              <p class="text-gray-500 text-sm mb-2">Install and configure PostgreSQL for the project.</p>
              <span class="text-xs text-gray-400">Due: Nov 2, 2025</span>
            </div>
            <span class="px-2 py-1 bg-gray-300 text-gray-700 rounded-full text-xs font-medium">Pending</span>
          </div>

          <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800 mb-1">Write API Documentation</h4>
              <p class="text-gray-500 text-sm mb-2">Document endpoints for user authentication and tasks.</p>
              <span class="text-xs text-gray-400">Due: Nov 5, 2025</span>
            </div>
            <span class="px-2 py-1 bg-green-400 text-white rounded-full text-xs font-medium">Completed</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


