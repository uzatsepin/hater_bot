<template>
    <div class="h-screen w-full">
        <div class="container">
            <div class="px-4 py-2">
                <Header />
            </div>
            <div class="mt-4">
                <div class="rounded-3xl bg-gray-800 px-2 py-4 h-screen shadow-[0_-3px_11px_0_rgba(249,115,22,0.9)]">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="shadow-lg border border-gray-600 p-2 rounded-xl" v-for="(item, idx) in punish"
                            :key="idx">
                            <div class="flex gap-2 flex-col mb-2">
                                <img :src="item.img" alt="" width="80px" class="block mx-auto">
                                <p class="text-white text-[14px] text-center">{{ item.title }}</p>
                            </div>
                            <div class="text-white border-t border-gray-600 pt-2">
                                <p class="text-center">{{ item.reward }}</p>
                            </div>
                        </div>
                    </div>
                </div>
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

const punish = [
    {
        img: 'https://i.pinimg.com/736x/12/83/3f/12833f8400313a0d3083c78e47d40958.jpg',
        title: 'Сломать коробку',
        reward: '+10 к хейту'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png',
        title: 'Удалить adobe',
        reward: '+15 к хейту'
    },
    {
        img: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/9725/akrales_211028_4820_0659sq.jpg',
        title: 'Выключить мак',
        reward: '+5 к хейту'
    },
    {
        img: 'https://roa.h-cdn.co/assets/16/04/1280x1280/square-1453992612-rs-038.jpg',
        title: 'Поцарапать диск',
        reward: '+18 к хейту',
    },
    {
        img: 'https://icf.listex.info/med/dc46d363-3377-0c27-47dc-6530412f32d2.jpg',
        title: 'Подсыпать майонеза',
        reward: '+23 к хейту',
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1790052928109125633/VffrDVCo_400x400.jpg',
        title: 'Забанить в пабге',
        reward: '+50 к хейту',
    }
]

</script>

<style scoped></style>