import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useLoaderStore } from "@/stores/loader";
import { useToastStore } from '@/stores/toasts';




export function feach(url: string, config?: AxiosRequestConfig): Promise<any>{
    const loaderStore = useLoaderStore();
    const toastStore = useToastStore();
    loaderStore.loading = true;

    return axios.get(url, config)
        .catch((error: AxiosResponse) => {
            toastStore.showToast('error')
        }).finally(() => {
            loaderStore.loading = false;
        })
    
}

export function add(url: string, data?: any): Promise<any>{
    const loaderStore = useLoaderStore();
    const toastStore = useToastStore();
    loaderStore.loading = true;
    return axios.post(url, data)
      .catch((error: AxiosResponse) => {
        toastStore.showToast('error')
      }).finally(() => {
          loaderStore.loading = false;
      })

}
