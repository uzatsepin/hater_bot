<template>
    <div class="fixed bottom-12 w-full px-2 left-0">
        <div class="flex justify-between bg-gray-900 rounded-2xl px-2 py-1 container mx-auto">
            <RouterLink :to="item.link" class="flex flex-col gap-1 justify-center items-center p-1 flex-1"
                :class="{ 'bg-gray-800 rounded-lg': isActive(item.link) }" v-for="(item, idx) in navItems" :key="idx">
                <Icon :icon="item.icon" width="24" height="24" class="text-white" />
                <p class="text-white text-[12px]">{{ item.name }}</p>
            </RouterLink>
        </div>
    </div>

</template>

<script setup lang="ts">

import { Icon } from '@iconify/vue'
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const navItems = ref([
    {
        name: 'Домой',
        link: '/',
        icon: 'ic:round-home',
        isActive: false,
    },
    {
        name: 'Действие',
        link: '/work',
        icon: 'tabler:click',
        isActive: false,
    },
    {
        name: 'Развитие',
        link: '/improve',
        icon: 'dashicons:welcome-learn-more',
        isActive: false,
    },
    {
        name: 'Профиль',
        link: '/profile',
        icon: 'iconamoon:profile-circle',
        isActive: false,
    },
])

const isActive = (link: string) => {
    return route.path === link
}

</script>

<style scoped></style>