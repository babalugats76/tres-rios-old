<template>
    <header class="w-full h-24 bg-[#f7f6fd]">
      <div class="container h-full mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="mx-4">
          <h1 class="text-[#50b0ae] text-3xl font-bold">Tres Rios Spanish</h1>
        </NuxtLink>
        <nav>
          <ul class="flex space-x-8 mx-4 text-lg font-bold">
            <li>
              <NuxtLink to="/events" class="hover:text-[#50b0ae]">Events</NuxtLink>
            </li>
            <!--<li>
              <NuxtLink to="/about" class="hover:text-[#50b0ae]">About</NuxtLink>
            </li> -->
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  nav a.router-link-active {
    @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
  }
  </style>