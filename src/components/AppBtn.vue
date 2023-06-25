<template>
    <button class="btn w-full h-full text-white rounded-md p-3 md:p-5 text-center text-xl" :class="`bg-${color}`" @click="onAction">{{ text }}</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    text: string;
    color: "violet" | "danger";
}
const props = withDefaults(defineProps<IProps>(), {
    text: "defaultValue",
    color: "danger"
})
const text = computed(() => props.text)
const color = computed(() => props.color)
const emits = defineEmits(['action'])
function onAction() {
    emits('action')
}
</script>
