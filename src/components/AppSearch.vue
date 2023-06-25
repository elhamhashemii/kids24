<template>
    <div class="relative bg-white border border-secondary rounded-md px-4 py-2 flex items-center justify-between">
        <input type="search" name="Search" placeholder="جستجو ..."
            class="w-full py-2 pl-10 text-md placeholder-dark rounded-md focus:outline-none" />
        <button type="submit" class="focus:outline-none focus:ring">
            <MagnifyingGlassIcon class="w-6 h-6" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
</script>