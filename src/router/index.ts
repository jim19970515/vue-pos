import { createRouter, createWebHistory } from "vue-router";
import Order from "../views/Order.vue";
import Unpaid from "@/views/Unpaid.vue";
import Paid from "@/views/Paid.vue";
import Details from "@/views/Details.vue";
import { useOrderStore } from "@/stores/modules/orders";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeView",
      component: () => import("@/views/HomeView.vue"),
      redirect: "/order",
      children: [
        {
          path: "Order",
          name: "order",
          component: Order,
          async beforeEnter(to, from) {
            const orderStore = useOrderStore();
            await orderStore.getOrders();
          },
          meta: {
            transitions: {
              enter: {
                name: "",
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: ""
              }
            }
          }
        },
        {
          path: "Unpaid",
          name: "unpaid",
          component: Unpaid,
          meta: {
            transitions: {
              enter: {
                name: "",
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: ""
              }
            }
          }
        },
        {
          path: "Paid",
          name: "paid",
          component: Paid,
          meta: {
            transitions: {
              enter: {
                name: "",
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: ""
              }
            }
          }
        }
      ]
    },
    {
      path: "/Details",
      name: "detailsPdf",
      component: Details
    },
    {
      path: "/HomeView2",
      name: "homeView2",
      component: () => import("@/views/HomeView2.vue")
    }
  ]
});

export default router;
