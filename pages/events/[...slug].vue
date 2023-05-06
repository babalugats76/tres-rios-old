<script setup>
const route = useRoute();
const story = await useAsyncStoryblok(`events/${route.params.slug}`, {
  version: "draft"
});
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>