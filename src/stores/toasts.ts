import { defineStore } from 'pinia'

interface ToastStoreState {
  show: boolean,
  type: null | string,
  msg: null | string
}

const initState: ToastStoreState = {
  show: false,
  type: null,
  msg: null
}

export const useToastStore = defineStore({
  id: 'toast',
  state: () => ({
    props: {...initState}
  }),
  actions: {
    showToast(type: string, msg?: string, time: number = 2000 ) {
      console.log(type)
      this.props = {
        show: true,
        type,
        msg: msg || null
      };

      setTimeout(() => {
        this.props = {...initState}
      }, time)
    }
  }
})
