<script setup lang="ts">
import Button from 'primevue/button';
import Panel from 'primevue/panel';
const route = useRoute()
</script>

<template>
  <HeroSection/>
  <Container>
  <div>
    <h1 class="text-3xl font-bold ">Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <div>
    <Panel header="Global" class="mb-4">
    <div>
      Content
    </div>
    <Button rounded label="Submit"/>
    </Panel>
    </div>
  </div>
  </Container>
</template>

<style>
@import url("~/assets/css/main.css");
</style>
