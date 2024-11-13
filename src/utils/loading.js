import {ref} from 'vue'

export const isLoading = ref(false)

export function showLoading(){
    isLoading.value = true
}
export function hideLoading(){
    setTimeout(()=>{
        isLoading.value = false
    },100)
}