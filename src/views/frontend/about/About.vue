<script setup>
import { Eye, Target } from 'lucide-vue-next'

const team = [
  {
    name: 'Milon Kumar',
    role: 'Founder & CEO',
    image: 'https://i.pravatar.cc/100?img=12',
    desc: 'Visionary leader with a passion for innovation and user experience.',
  },
  {
    name: 'Rafi Ahmed',
    role: 'Lead Developer',
    image: 'https://i.pravatar.cc/100?img=18',
    desc: 'Crafts scalable, high-performance systems with precision and care.',
  },
  {
    name: 'Sarah Khan',
    role: 'UI/UX Designer',
    image: 'https://i.pravatar.cc/100?img=32',
    desc: 'Designs elegant interfaces that merge aesthetics and functionality.',
  },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- 🌟 HEADER -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8" />
          <span class="text-xl font-bold text-[#ff3434]">Dynamatic</span>
        </div>

        <nav class="hidden md:flex items-center space-x-6 font-medium">
          <a href="/" class="hover:text-[#ff3434] transition">Home</a>
          <a href="/about" class="text-[#ff3434] font-semibold">About</a>
          <a href="#" class="hover:text-[#ff3434] transition">Features</a>
          <a href="#" class="hover:text-[#ff3434] transition">Contact</a>
        </nav>
      </div>
    </header>

    <!-- 🎯 HERO -->
    <section
      class="relative bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center h-[350px] flex items-center justify-center"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">About <span class="text-[#ff3434]">Us</span></h1>
        <p class="text-gray-200 text-lg max-w-2xl mx-auto">
          Building next-gen solutions to empower teams and transform digital experiences.
        </p>
      </div>
    </section>

    <!-- 🧭 ABOUT STORY -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://illustrations.popsy.co/gray/teamwork.svg"
          alt="Our Team"
          class="w-full max-w-md mx-auto"
        />
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            At <span class="text-[#ff3434] font-semibold">Dynamatic</span>, we’re a passionate group of
            innovators and developers dedicated to creating elegant digital solutions that simplify
            business operations and drive growth.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Since our inception, we’ve been on a mission to build software that blends performance,
            design, and usability — making complex workflows beautifully simple.
          </p>
        </div>
      </div>
    </section>

    <!-- 🚀 MISSION / VISION -->
    <section class="py-20 bg-gray-50 border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-12">Our Mission & Vision</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <Target class="w-10 h-10 text-[#ff3434] mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-3">Our Mission</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              To empower individuals and businesses through intuitive and efficient technology,
              enhancing productivity and creativity every step of the way.
            </p>
          </div>

          <div
            class="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <Eye class="w-10 h-10 text-[#ff3434] mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-3">Our Vision</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              To be a global leader in digital innovation — building tools that redefine how people
              connect, create, and grow in the modern era.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 👥 OUR TEAM -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold text-gray-900 mb-12">Meet Our Team</h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <img
              :src="member.image"
              class="w-24 h-24 mx-auto rounded-full border-4 border-[#ff3434] mb-4"
            />
            <h3 class="text-lg font-semibold">{{ member.name }}</h3>
            <p class="text-[#ff3434] text-sm mb-2">{{ member.role }}</p>
            <p class="text-gray-600 text-sm">{{ member.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ❤️ CTA SECTION -->
    <section class="py-20 bg-[#ff3434] text-white text-center">
      <h2 class="text-3xl font-semibold mb-4">Want to work with us?</h2>
      <p class="text-white/90 mb-8">
        Join our mission to innovate and make technology beautifully simple.
      </p>
      <button
        class="bg-white text-[#ff3434] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
      >
        Contact Us
      </button>
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


