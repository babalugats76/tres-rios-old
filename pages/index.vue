<script setup>
const story = await useAsyncStoryblok("home", {
  version: "draft",
})
</script>
<template>
  <Header />
  <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>