<template>
  <div class="bg-white">
    <header>
      <nav class="flex justify-between container p-4 mx-auto">
        <div>
          <h1 class="text-3xl text-purple-800 font-extrabold">NameHere</h1>
        </div>
        <div class="flex justify-between items-center gap-12">
          <NuxtLink to="/" class="text-red-700">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>

          <button class="px-6 py-2 border-2 border-black">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </button>
        </div>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
