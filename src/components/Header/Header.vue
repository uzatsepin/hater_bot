<template>
    <div class="flex justify-between items-center mt-4">
        <div class="text-white font-bold">
            Привет, <span class="text-orange-400">{{ WebApp.initDataUnsafe.user?.first_name }}</span>
        </div>
        <div class="text-white bg-gray-700 px-4 py-1 rounded-xl flex flex-col items-center">
            <div class="text-sm text-gray-200">Статус:</div>
            <RouterLink to="/statuses">
                <span>{{ store.currentStatus.emoji }}</span>
                {{ store.currentStatus.label }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/counter"
import { WebApp } from '@grammyjs/web-app'

const store = useStore()


</script>

<style scoped></style>