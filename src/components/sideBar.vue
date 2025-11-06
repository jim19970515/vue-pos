<template>
  <div class="w-fit h-full bg-gray-200">
    <ul class="flex flex-col gap-4 h-full p-4 shadow-xl">
      <li v-for="(list, key) in lists" :key="key">
        <router-link :to="list.path as string">
          <div class="list-item">
            <component class="text-2xl" :is="list.icon"></component>
            <span>{{ list.title }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const lists = [
  { path: "/", icon: "HomeFilled", title: "home" },
  { path: "/order", icon: "Food", title: "food" },
  { path: "/pieChart", icon: "PieChart", title: "pieChart" },
  { path: "/settings", icon: "Settings", title: "settings" }
];
</script>

<style scoped lang="scss">
.list-item {
  @apply flex flex-col items-center justify-center gap-0.5 px-4 py-2 text-sm;
  &:hover {
    @apply bg-primary text-white rounded-md px-4 py-2 duration-700 transition-all ease-in-out;
    text-decoration: underline;
  }
  span {
    @apply text-sm;
  }
}
</style>
