<template>
    <div id="hamburger" class="card flex justify-content-center">
      <Button class="text-black-important dark:text-white" type="button" icon="pi pi-bars" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
const { items } = useMenuItems();

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>
<style>
.text-black-important {
    color: #000 !important;
}
</style>
