import { ref } from "vue";

const useLoading = () => {
  const isLoading = ref(false);

  const showLoading = () => {
    isLoading.value = true;
  };
  const hideLoading = () => {
    isLoading.value = false;
  };

  return {
    isLoading,
    showLoading,
    hideLoading
  };
};
export default useLoading;
