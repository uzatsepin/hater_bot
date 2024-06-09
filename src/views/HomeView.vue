<script setup lang="ts">

import BottomNav from '@/components/BottomNav/BottomNav.vue'
import FarmComponent from "@/components/FarmComponent/FarmComponent.vue"
import Header from "@/components/Header/Header.vue"
import { WebApp } from '@grammyjs/web-app'

WebApp.ready()
WebApp.expand()


</script>

<template>
  <div class="h-screen w-full">
    <div class="container">
      <div class="px-4 py-2">
        <Header />
      </div>
      <div class="mt-4">
        <FarmComponent />
      </div>
      <div class="px-4 py-2 relative">
        <BottomNav />
      </div>
    </div>
  </div>
</template>
