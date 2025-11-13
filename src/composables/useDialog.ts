import Swal from "sweetalert2";

export function useDialog() {
  const showSuccess = (text: string) => {
    Swal.fire("成功", text, "success");
  };

  const showError = (text: string) => {
    Swal.fire("錯誤", text, "error");
  };

  return { showSuccess, showError };
}
