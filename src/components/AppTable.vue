<template>
    <div class="overflow-x-auto">
        <table class="w-full border-collapse border-spacing-y-2 border-spacing-x-4 whitespace-nowrap">
            <tr class="text-center text-xl bg-secondary">
                <th class="py-6">
                    <div class="mt-1 px-4 md:px-0">
                        <input type="checkbox" class="h-6 w-6 th-checkbox" />
                    </div>
                </th>
                <th>عنوان فایل</th>
                <th>دسته</th>
                <th>سن</th>
                <th>تاریخ انتشار</th>
                <th></th>
            </tr>
            <tr class="text-center" v-for="i in 5">
                <td class="p4">
                    <div class="mt-1">
                        <input type="checkbox" class="h-6 w-6 td-checkbox" />
                    </div>
                </td>
                <td class="p-4">پیشنهاد دکتر برای هفت ماهگی</td>
                <td class="p-4">A</td>
                <td class="p-4">7 ماه</td>
                <td class="p-4">1402/02/02</td>
                <td>
                    <div class="px-4 md:px-0">
                        <EyeIcon class="w-6 h-6 m-auto cursor-pointer" />
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import { EyeIcon } from '@heroicons/vue/24/solid';
</script>

<style>
table,
td {
    border: 1px solid #d9d9d9;
}

th {
    font-weight: 100;
}

input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    border-radius: 4px;
}

.td-checkbox {
    border: 1px solid #d9d9d9;
}

.th-checkbox {
    border: 1px solid #7d7d7d;
}
</style>