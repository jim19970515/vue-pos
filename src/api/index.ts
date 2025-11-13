import base from "@/api/path";
import service from "@/utils/request";

const api = {
  //取得所有資料(分頁)
  getOrder(page: number) {
    return service.get(base.baseUrl + "/orders", { params: { page } });
  },
  //取得對應單筆資料
  getOrderId(orderId: string) {
    return service.get(base.baseUrl + "/order/" + `${orderId}`);
  },
  //付款
  checkout(oreder: string) {
    return service.post(base.baseUrl + "/pay/" + `${oreder}`);
  }
};

export default api;
