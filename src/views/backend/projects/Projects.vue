<script setup>

import {
  Folder,
} from 'lucide-vue-next'
import { projects } from "@/views/backend/projects/projectCards.js"

console.log("Projects ->>", projects);

</script>
<template>
  <main class="p-6 space-y-6">
    <section class="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Folder class="w-5 h-5 mr-2 text-[#ff3434]" /> Projects
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(project, index) in projects"
          class="bg-white rounded-xl shadow-sm transition flex overflow-hidden border border-gray-200">
          <div class="w-1/3">
            <div class="p-3 h-full">
              <img :src="project?.image" :alt="project?.title || 'Project Image'" class="h-full w-full object-contain rounded-md"/>
            </div>
          </div>
          <div class="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h2 class="text-lg font-semibold text-gray-800 mb-1">{{ project?.title }}</h2>
              <p class="text-gray-500 text-sm mb-2">{{ project?.description }} </p>
            </div>
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span>Created: Mar 5, 2025</span>
              <RouterLink :to="project?.url"
                class="px-3 py-1 bg-[#ff3434] text-white rounded-md hover:bg-[#e02d2d] transition text-sm">View</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
