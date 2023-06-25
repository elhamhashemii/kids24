<template>
    <div>
        <AppNav />
        <div class="flex justify-start items-start overflow-x-auto">
            <AppDrawer />
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import AppDrawer from './AppDrawer.vue';
import AppNav from './AppNav.vue';
</script>