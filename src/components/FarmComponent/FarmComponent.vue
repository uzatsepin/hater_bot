<template>
    <div class="rounded-3xl bg-gray-800 px-2 py-4 h-screen shadow-[0_-3px_11px_0_rgba(249,115,22,0.9)]">
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-gray-700 rounded-2xl flex flex-col gap-1 items-center justify-center py-1">
                <p class="text-white text-sm">Хейта за тап</p>
                <div class="flex gap-2">
                    <span>😡</span>
                    <p class="text-white font-bold">1</p>
                </div>
            </div>
            <div class="bg-gray-700 rounded-2xl flex flex-col gap-1 items-center justify-center">
                <p class="text-white text-sm">След. уровень</p>
                <div class="flex gap-2">
                    <span>⬆️</span>
                    <p class="text-white font-bold">{{ store.level }}</p>
                </div>
            </div>
            <div class="bg-gray-700 rounded-2xl flex flex-col gap-1 items-center justify-center">
                <p class="text-white text-sm">Захейтил</p>
                <div class="flex gap-2">
                    <span>✅</span>
                    <p class="text-white font-bold">{{ store.counter }}</p>
                </div>
            </div>
        </div>

        <div class="image-container">
            <img src="../../assets/images/vlad.jpeg" alt="vlad"
                class="rounded-full max-w-64 block mx-auto mt-12 shadow-[0_0_40px_0_rgba(249,115,22,0.9)]"
                @click="handleClick" :class="{ flash: isFlashing }" />
            <img v-for="flyImage in store.flyImages" :key="flyImage.id" :src="flyImage.src" class="fly-image"
                :style="{ left: flyImage.left + 'px' }" width="30px" height="30px" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/counter"
import { ref } from 'vue'

const store = useStore()
const isFlashing = ref(false)

const handleClick = () => {
    isFlashing.value = true
    setTimeout(() => {
        isFlashing.value = false
    }, 1000)

    store.addFlyImage()
    store.incrementCounter()
}

</script>

<style scoped>
@keyframes flash {

    0%,
    100% {
        box-shadow: 0 0 40px 0 rgba(249, 115, 22, 0.9);
    }

    50% {
        box-shadow: 0 0 40px 0 rgba(249, 115, 22, 0.3);
    }
}

@keyframes flyUp {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-50px);
    }
}

.image-container {
    position: relative;
    display: flex;
}

.fly-image {
    position: absolute;
    width: 30px;
    height: 30px;
    animation: flyUp 1s ease-in-out forwards;
    pointer-events: none;
}

.flash {
    animation: flash 300ms ease-in-out;
}
</style>