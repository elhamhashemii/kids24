<template>
    <div class="relative bg-white border border-secondary rounded-md px-4 py-2">
        <span class="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" class="p-2 focus:outline-none focus:ring">
                <MagnifyingGlassIcon class="w-6 h-6" />
            </button>
        </span>
        <input type="search" name="Search" placeholder="جستجو ..."
            class="w-full py-2 pl-10 text-md placeholder-dark rounded-md focus:outline-none" />
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
</script>