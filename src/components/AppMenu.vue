<template>
    <div
        class="bg-white border border-secondary rounded-md px-4 py-2 flex items-center justify-between cursor-pointer">
        <select class="w-full focus:outline-none">
            <option v-for="item in items" :key="item" value="item">{{ item }}</option>
            <ChevronDownIcon class="w-4 h-4" />
        </select>
    </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import { computed } from 'vue';
interface IProps {
    items: string[]
}
const props = defineProps<IProps>()
const items = computed(() => props.items)
</script>