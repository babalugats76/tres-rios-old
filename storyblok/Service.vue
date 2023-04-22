<template>
    <div
      v-editable="blok"
      class="pl-6 w-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden"
    >
      <img
        :src="blok.image"
        class="w-full h-48 xl:h-72 object-cover"
      /> 
      <div class="px-12 py-6">
        <h3 class="text-2xl text-[#1d243d] font-bold">
          {{ blok.name }}
        </h3>
        <blockquote>
            {{ blok.description }}
        </blockquote>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ blok: Object })
  </script>