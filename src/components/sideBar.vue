<template>
  <div class="w-fit h-full bg-white">
    <ul class="flex flex-col gap-6 h-full p-2 shadow-xl">
      <li v-for="(list, key) in lists" :key="key">
        <router-link :to="list.path as string" class="list-item">
          <component class="w-10" :is="list.icon"></component>
          <span>{{ list.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const lists = [
  { path: "/homeView2/home", icon: "HomeFilled", title: "home" },
  { path: "/homeView2/food", icon: "Food", title: "food" },
  { path: "/homeView2/pieChart", icon: "PieChart", title: "pieChart" },
  { path: "/homeView2/history", icon: "GoodsFilled", title: "history" }
];
</script>

<style scoped lang="scss">
.list-item {
  @apply flex flex-col items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700;
  &:hover {
    @apply text-primary ring-4 ring-primary rounded-md px-4 py-2 duration-700 transition-all ease-in-out;
    text-decoration: underline;
  }
  span {
    @apply text-sm;
  }
}
</style>
