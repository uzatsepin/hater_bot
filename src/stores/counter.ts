import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStore = defineStore('main', () => {
  const counter = ref(0)
  const level = ref(1)
  const flyImages = ref([])

  const statuses = [
    { emoji: '😐', label: 'Нейтральный' },
    { emoji: '😫', label: 'Терпимый' },
    { emoji: '😠', label: 'Недоброжелатель' },
    { emoji: '😤', label: 'Бесящий' },
    { emoji: '😡', label: 'Хейтер' }
  ]

  const currentStatus = computed(() => {
    return statuses[(level.value - 1) % statuses.length]
  })

  const incrementCounter = () => {
    counter.value++
    if (counter.value % 10 === 0) {
      level.value++
    }
  }

  const addFlyImage = () => {
    const flyImage = {
      id: Date.now(),
      src: 'https://i.ibb.co/pWBkVX8/sticker.webp',
      left: Math.random() * 100
    }

    flyImages.value.push(flyImage)

    setTimeout(() => {
      flyImages.value = flyImages.value.filter((img) => img.id !== flyImage.id)
    }, 1000)
  }

  return {
    counter,
    level,
    flyImages,
    currentStatus,
    incrementCounter,
    addFlyImage
  }
})
