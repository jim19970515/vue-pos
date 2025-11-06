import { ref, onMounted, onBeforeUnmount } from "vue";
import dayjs from "dayjs";

export const useCurrentTime = (format: string) => {
  onMounted(() => {
    updateTime();
    timer = setInterval(updateTime, 1000);
  });
  onBeforeUnmount(() => {
    if (timer) {
      console.log("clearInterval");
      clearInterval(timer);
    }
  });
  // 當前時間
  const currentTime = ref("");
  // 定時器
  let timer: number | null = null;
  // 更新時間
  const updateTime = () => {
    currentTime.value = dayjs().format(format);
  };
  return currentTime;
};
