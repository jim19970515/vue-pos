import axios from "axios";
export const handleCallApi = async (
  args = {
    method: "",
    router: "",
    params: undefined,
    data: undefined,
    baseUrl: undefined,
    responseType: undefined
  }
) => {
  try {
    // 當 parseArgs.baseUrl 自動帶入 VUE_APP_URL
    if (!parseArgs.baseUrl) parseArgs.baseUrl = "VUE_APP_URL";
    // 判斷api method 是否為這幾種其一
    if (
      args.method == "GET" ||
      args.method == "POST" ||
      args.method == "PUT" ||
      args.method == "PATCH" ||
      args.method == "DELETE"
    ) {
      // axios 封裝
      const config = {
        method: args.method,
        url: process.env[parseArgs.baseUrl] + args.router
      };
      if (args.responseType) {
        config.responseType = args.responseType;
      }
      if (args.method === "GET") {
        config.params = args.params;
      } else {
        config.data = args.data;
      }
      const res = await axios(config);
      return res.data;
    }
    return Swal.fire("method方法錯誤");
  } catch {
    throw error;
  }
};
