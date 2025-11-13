import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import swal from "sweetalert2";
import useLoading from "@/composables/useLoading";

const { showLoading, hideLoading } = useLoading();

const service = axios.create({
  timeout: 0
});

//攔截器
//發送數據之前
//config 參數可以獲取到(Api 發送內容, headers、data、method、url、params等等)
service.interceptors.request.use(
  (config) => {
    showLoading();
    return config;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);
//返回數據之前
service.interceptors.response.use(
  (response: AxiosResponse) => {
    showLoading();
    return response?.status === 200 ? Promise.resolve(response) : Promise.reject(response);
  },
  (error) => {
    hideLoading();
    const { status, message } = error;
    errorHandler(status, message);
  }
);
const errorHandler = (status: number, message: string) => {
  switch (status) {
    case 400:
      swal.fire({
        title: "錯誤",
        text: message,
        icon: "error"
      });
      break;
    case 401:
      swal.fire({
        title: "錯誤",
        text: message,
        icon: "error"
      });
      break;
    case 403:
      swal.fire({
        title: "錯誤",
        text: message,
        icon: "error"
      });
      break;
    case 404:
      swal.fire({
        title: "錯誤",
        text: message,
        icon: "error"
      });
      break;
    case 500:
      swal.fire({
        title: "錯誤",
        text: message,
        icon: "error"
      });
      break;
    default:
      swal.fire({
        title: "錯誤",
        text: message,
        icon: "error"
      });
      break;
  }
};

export default service;
