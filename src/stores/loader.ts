import { defineStore } from 'pinia'

export const useLoaderStore = defineStore({
  id: 'loader',
  state: () => ({
    loading: false
  })
})
