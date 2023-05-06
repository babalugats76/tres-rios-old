<script setup>
const story = await useAsyncStoryblok("home",
  {
    version: "draft"
  }
);
</script>
<template>
  <h1>Events</h1>
  <pre v-if="story"> {{ story }} </pre>
</template>