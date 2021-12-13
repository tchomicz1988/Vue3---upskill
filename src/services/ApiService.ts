import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useLoaderStore } from "@/stores/loader";



export function feach(url: string, config?: AxiosRequestConfig): Promise<any>{
    const loaderStore = useLoaderStore();
    loaderStore.loading = true;

    return axios.get(url, config)
        .catch((error: AxiosResponse) => {
        console.log(error)
        }).finally(() => {
            loaderStore.loading = false;
        })
    
}