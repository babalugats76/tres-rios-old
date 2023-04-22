<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(slug && slug.length > 0 ? slug[slug.length - 1] : '/', {
  version: "draft",
});
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
