import { defineStore } from "pinia";
import {ref} from 'vue'
import axios from "axios";
import { showLoading,hideLoading } from '@/utils/loading.js';
import { useOrderStore } from "../stores";


export const useCustomerStore = defineStore('customer',()=>{
    const products =ref([])
    const user = ref({
        email:'',
        name:'',
        tel:Number,
        address:''
    })
    const total = ref()
    const create_at = ref('')
    const is_paid = ref(Boolean)

    const api = 'https://vue-course-api.hexschool.io/api/f0920515972'
    const checkOutId = ref('')
    const showOrder = async(orderId) =>{
        checkOutId.value = orderId
        showLoading()
        const {data} = await axios.get(`${api}/order/${orderId}`)
        products.value = data.order.products
        user.value = data.order.user
        total.value = data.order.total
        is_paid.value = data.order.is_paid
        const date = new Date(data.order.create_at * 1000)
        const hours = date.getHours()
        let minutes = null
        if(date.getMinutes().toString().length == 1 ){
            minutes = '0'+ date.getMinutes()
        }else{
            minutes =  date.getMinutes()
        }
        create_at.value = `${hours}:${minutes}`
        hideLoading()
    }

    const checkOut = async() =>{
        showLoading()
        const {data} = await axios.post(`${api}/pay/${checkOutId.value}`)
        console.log(data)
        setTimeout(()=>{
            showOrder(checkOutId.value)
            const orderStore = useOrderStore()
            const current_page = orderStore.current_page
            orderStore.getOrders(current_page)
            hideLoading()
        },3000)
    }
    return{showOrder,user,total,create_at,products,checkOut,is_paid}
})