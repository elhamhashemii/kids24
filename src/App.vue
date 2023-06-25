<template>
  <AppLayout>
    <div class="w-full p-4 mx-2 md:mr-12 md:ml-4 mt-12 ">
      <div class="flex flex-col md:flex-row gap-y-3 md:gap-x-2 items-stretch justify-between overflow-x-auto">
        <AppSearch class="basis-4/12" />
        <AppMenu :items="itemsFirst" class="basis-3/12" />
        <AppMenu :items="itemsSecond" class="basis-3/12" />
        <AppBtn class="basis-1/12" text="افزودن" color="violet" />
        <AppBtn class="basis-1/12" text="حذف" color="danger" />
      </div>
      <AppTable />
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from './components/layout/AppLAyout.vue';
import AppSearch from './components/AppSearch.vue'
import AppBtn from './components/AppBtn.vue';
import AppMenu from './components/AppMenu.vue';
import AppTable from './components/AppTable.vue';
const itemsFirst = [ "فیلتر براساس دسته", "فیلتر براساس سن", "موارد دیگر ... "]
const itemsSecond = [ "فیلتر براساس سن", "فیلتر براساس دسته", "موارد دیگر ... "]
</script>