<template>
    <div class="flex flex-row items-center gap-x-1 justify-center">
        <div v-for="i in 6" class="px-3 py-1 cursor-pointer">{{ i }}</div>
        <div class="bg-violet rounded-md text-white px-3 py-1 cursor-pointer">7</div>
        <ChevronLeftIcon class="w-4 h-4 mx-3 text-gray font-bold cursor-pointer" />
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/24/solid';
</script>