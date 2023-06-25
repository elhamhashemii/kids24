<template>
    <div :class="isOpen ? 'w-20 md:w-60' : 'w-20'"
        class="flex flex-col px-3 duration-300 bg-primary text-white shadow relative h-full md:h-screen">
        <div>
            <div @click="isOpen = !isOpen" class="hidden md:block absolute bg-primary rounded-md px-1 py-2 -left-7 top-16 cursor-pointer">
                <component :is="drawerTogglerIcon" class="text-white w-6 h-6" />
            </div>
            <div>
                <ul class="pb-4 space-y-8">
                    <li v-for="item in items" :key="item.id">
                        <a :href="`#${item.name}`" class="flex items-center gap-x-2 px-2 rounded-md justify-center md:justify-start" :class="isOpen ? 'jusitfy-start' : 'justify-center'">
                            <component :is="item.icon" class="w-6 h-6" />
                            <div class="hidden md:block text-xl" v-if="isOpen">{{ item.title }}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'
import dummyData from '../../const/drawer'
const isOpen = ref(true);

const drawerTogglerIcon = computed(() => isOpen.value ? ChevronRightIcon : ChevronLeftIcon)

const items = dummyData.items

</script>
