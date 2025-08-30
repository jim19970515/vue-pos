import axios from "axios";
import swal from "sweetalert2";

const service = axios.create({
  base: "",
  timeout: 0, //延遲時間
  header: {
    "content-type": "application/json" //文件格式
  }
});
//攔截器
service.interceptors.request.use((config) => {
  const token = localStorage.setItem("token");
  if (token) {
    config.headers.Authorization = `Bearer${token}`;
  }
  return config;
  (error) => {
    return Promise.reject(error);
  };
});
service.interceptors.response.use((response) => {
  (response) => {
    const res = response.data;
    if (res.code && res.code != 200) {
      return Promise.reject(new Error(res.message));
    }
    return res.data;
  },
    (error) => {
      const status = error.response?.status;
      switch (status) {
        case 400:
          swal.fire({
            title: "錯誤",
            text: error.response.data.message,
            icon: "error"
          });
          break;
        case 401:
          swal.fire({
            title: "錯誤",
            text: error.response.data.message,
            icon: "error"
          });
          break;
        case 403:
          swal.fire({
            title: "錯誤",
            text: error.response.data.message,
            icon: "error"
          });
          break;
        case 404:
          swal.fire({
            title: "錯誤",
            text: error.response.data.message,
            icon: "error"
          });
          break;
        case 500:
          swal.fire({
            title: "錯誤",
            text: error.response.data.message,
            icon: "error"
          });
          break;
      }
      return Promise.reject(error);
    };
});
export default service;
