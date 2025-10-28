<script setup>

</script>

<template>
  <main class="flex-1 p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Revenue Card -->
      <div
        class="bg-gradient-to-r from-[#ff3434]/90 to-[#ff3434]/70 p-6 rounded-xl shadow-sm text-white transform hover:scale-[1.02] transition-transform duration-300">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Revenue</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 1v3m0 16v3m11-11h-3M4 12H1m16.364-7.364l-2.121 2.121M6.757 17.657l-2.121 2.121M17.657 17.657l2.121 2.121M6.757 6.343l2.121 2.121" />
          </svg>
        </div>
        <p class="text-3xl font-bold mt-4">$45,230</p>
        <p class="mt-2 text-sm opacity-80">Up 12% from last month</p>
      </div>
      <!-- Users Card -->
      <div class="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform duration-300">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-700">Users</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#ff3434]" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 20h5v-2a4 4 0 00-4-4h-1m-4 6v-6m0 0H9m4 0h1a4 4 0 014 4v2h-5m-4 0H5v-2a4 4 0 014-4h1" />
          </svg>
        </div>
        <p class="text-3xl font-bold text-[#ff3434] mt-4">1,254</p>
        <p class="mt-2 text-sm text-gray-500">Active users this month</p>
      </div>
      <!-- Projects Card -->
      <div class="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform duration-300">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-700">Projects</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#ff3434]" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6h6v6m-6 0h6m-6 0v6" />
          </svg>
        </div>
        <p class="text-3xl font-bold text-[#ff3434] mt-4">23</p>
        <p class="mt-2 text-sm text-gray-500">Ongoing projects</p>
      </div>
      <!-- Merchants Card -->
      <div class="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform duration-300">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-700">Merchants</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#ff3434]" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>
        <p class="text-3xl font-bold text-[#ff3434] mt-4">105</p>
        <p class="mt-2 text-sm text-gray-500"> Total merchants onboarded </p>
      </div>
    </div>
    <section class="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-800 mb-6"> User Registration </h2>
      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Text Inputs -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
              placeholder="John Doe" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
              placeholder="john@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]"
              placeholder="********" />
          </div>
          <!-- Custom Date Picker -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input type="date"
              class="custom-date w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434] text-gray-700 [color-scheme:light]" />
          </div>
          <!-- Custom Select -->
          <div class="relative">
            <label class="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              class="appearance-none w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434] text-gray-700 pr-10">
              <option>Bangladesh</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <svg class="w-4 h-4 absolute right-3 top-[38px] text-[#ff3434]" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <!-- Gorgeous File Upload -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
            <label
              class="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-[#ff3434] hover:bg-[#ff3434]/5 transition p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#ff3434] mb-2" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
              </svg>
              <span class="text-sm text-gray-600">Click to upload or drag & drop</span>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>
        <!-- Address -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea rows="3"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff3434]"
            placeholder="Enter your address..."></textarea>
        </div>
        <!-- Custom Checkbox -->
        <div class="flex items-center space-x-2">
          <label class="relative flex items-center cursor-pointer select-none">
            <input type="checkbox" class="peer hidden" />
            <div
              class="w-5 h-5 border-2 border-gray-300 rounded-md flex items-center justify-center transition-all duration-200 peer-checked:border-[#ff3434] peer-checked:bg-[#ff3434]">
              <svg class="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </label>
          <span class="text-sm text-gray-600">I agree to the Terms & Conditions</span>
        </div>
        <!-- Custom Radio Buttons -->
        <div>
          <p class="text-sm font-medium text-gray-700 mb-2"> Select User Type </p>
          <div class="flex space-x-6">
            <label class="relative flex items-center space-x-2 cursor-pointer select-none">
              <input type="radio" name="user_type" value="admin" class="peer hidden" />
              <div
                class="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-[#ff3434] transition">
                <div
                  class="w-2.5 h-2.5 bg-[#ff3434] rounded-full scale-0 peer-checked:scale-100 transition-transform duration-150">
                </div>
              </div>
              <span class="text-sm text-gray-700">Admin</span>
            </label>
            <label class="relative flex items-center space-x-2 cursor-pointer select-none">
              <input type="radio" name="user_type" value="customer" class="peer hidden" />
              <div
                class="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-[#ff3434] transition">
                <div
                  class="w-2.5 h-2.5 bg-[#ff3434] rounded-full scale-0 peer-checked:scale-100 transition-transform duration-150">
                </div>
              </div>
              <span class="text-sm text-gray-700">Customer</span>
            </label>
          </div>
        </div>
        <!-- Submit Button -->
        <button type="submit"
          class="bg-[#ff3434] text-white px-6 py-2 rounded-md hover:bg-[#e02d2d] transition shadow-sm"> Submit </button>
      </form>
    </section>
    <section class="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 class="text-xl font-semibold text-gray-800"> Recent Transactions </h2>
        <div class="flex flex-wrap items-center gap-3">
          <!-- Search -->
          <div class="relative">
            <input type="text" placeholder="Search..."
              class="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434]" />
            <svg class="w-5 h-5 absolute left-3 top-[9px] text-gray-400" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <!-- Sort By -->
          <div class="relative">
            <select
              class="appearance-none pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434] text-gray-700">
              <option>Sort by</option>
              <option>Amount (High → Low)</option>
              <option>Amount (Low → High)</option>
              <option>Date (Newest)</option>
              <option>Date (Oldest)</option>
            </select>
            <svg class="w-4 h-4 absolute right-3 top-[11px] text-[#ff3434] pointer-events-none"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <!-- Date Filter -->
          <div class="relative">
            <input type="date"
              class="pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ff3434] focus:border-[#ff3434] text-gray-700" />
            <svg class="w-5 h-5 absolute right-3 top-[9px] text-[#ff3434]" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10m-11 6h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <!-- Add Button -->
          <button class="bg-[#ff3434] text-white px-4 py-2 rounded-md hover:bg-[#e02d2d] transition"> Add New </button>
        </div>
      </div>
      <!-- Table -->
      <div class="overflow-x-auto border border-gray-200 rounded-lg">
        <table class="min-w-full text-sm text-gray-700">
          <thead class="bg-[#ff3434]/10 border-b border-[#ff3434]/30">
            <tr>
              <th class="px-6 py-3 text-left font-semibold">#</th>
              <th class="px-6 py-3 text-left font-semibold">Customer</th>
              <th class="px-6 py-3 text-left font-semibold">Email</th>
              <th class="px-6 py-3 text-left font-semibold">Amount</th>
              <th class="px-6 py-3 text-left font-semibold">Status</th>
              <th class="px-6 py-3 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-50 transition">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4 font-medium">John Smith</td>
              <td class="px-6 py-4 text-gray-500">john@example.com</td>
              <td class="px-6 py-4 font-semibold text-[#ff3434]">$250</td>
              <td class="px-6 py-4">
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Completed</span>
              </td>
              <td class="px-6 py-4 text-right">
                <button class="text-[#ff3434] hover:underline"> View </button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50 transition">
              <td class="px-6 py-4">2</td>
              <td class="px-6 py-4 font-medium">Sarah Lee</td>
              <td class="px-6 py-4 text-gray-500">sarah@example.com</td>
              <td class="px-6 py-4 font-semibold text-[#ff3434]">$420</td>
              <td class="px-6 py-4">
                <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Pending</span>
              </td>
              <td class="px-6 py-4 text-right">
                <button class="text-[#ff3434] hover:underline"> View </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination -->
      <div class="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm text-gray-600">
        <p> Showing <span class="font-semibold text-[#ff3434]">1–10</span> of <span class="font-semibold">50</span>
          results </p>
        <div class="flex items-center space-x-2 mt-2 sm:mt-0">
          <button class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"> Prev </button>
          <button class="px-3 py-1 bg-[#ff3434] text-white rounded-md"> 1 </button>
          <button class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"> 2 </button>
          <button class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"> Next </button>
        </div>
      </div>
    </section>
  </main>
</template>