<template>
    <div class="h-screen w-full">
        <div class="container">
            <div class="px-4 py-2">
                <Header />
            </div>
            <div class="text-white mt-24">
                <p class="text-xl text-center ">В разработке...</p>

                <RouterLink to="/"
                    class="flex items-center justify-center mt-12 bg-gray-700 w-1/3 mx-auto py-2 px-4 rounded-xl">На
                    главную
                </RouterLink>
            </div>
            <div class="px-4 py-2 relative">
                <BottomNav />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BottomNav from '@/components/BottomNav/BottomNav.vue'
import Header from "@/components/Header/Header.vue"

</script>

<style scoped></style>