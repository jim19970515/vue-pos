import { defineStore } from "pinia";
import {ref,computed} from 'vue'
import axios from "axios";

export const useOrderStore = defineStore('order',()=>{
    const api = 'https://vue-course-api.hexschool.io/api/f0920515972'
    const orders = ref([]) //總
    const pagination = ref({})
    const current_page = ref(1)
    const getOrders = async(page = 1) =>{
        const {data} = await axios.get(`${api}/orders?page=${page}`)
        console.log(data)
        orders.value = data.orders
        pagination.value = data.pagination
        current_page.value = data.pagination.current_page
        console.log(orders.value)
    }
    const unPaidOrders = computed(()=>{
        const is_paid = orders.value.filter(item => item.is_paid === false)
        return is_paid
    })
    const paidOrders = computed(()=>{
        const is_paid = orders.value.filter(item => item.is_paid === true)
        return is_paid
    })
    return{getOrders,orders,unPaidOrders,paidOrders,current_page,pagination}
})