import { API_REQUEST_TIMEOUT, RESPONSE_CODE } from "../../helper/consts";
import axios from "axios";

import qs from "qs";
// import { refershTokenUrl } from "./apis/auth/urls";
import storage from "../../helper/storage";

const RESTFUL_AUTH_URL = process.env.REACT_APP_RESTFUL_AUTH_URL;

const LogType = {
  REQUEST: "req",
  RESPONSE: "res",
  ERROR: "err",
}

const log = (...params) => {
  if (process.env.NODE_ENV === `development`) {
    console.log(...params);
  }
};

const requestLog = (
  method,
  url,
  data,
  type,
  baseURL
) => {
  const tag =
    type === LogType.REQUEST || type === LogType.RESPONSE
      ? method
      : LogType.ERROR;
  const colors = {
    [LogType.REQUEST]: "blue",
    [LogType.RESPONSE]: "green",
    [LogType.ERROR]: "red",
  };
  const icons = {
    [LogType.REQUEST]: ">>>",
    [LogType.RESPONSE]: "<<<",
    [LogType.ERROR]: "xxx",
  };

  log(
    `%c${icons[type]} [${tag.toUpperCase()}] | %c${url.replace(
      baseURL,
      ""
    )} \n`,
    `color: ${colors[type]}; font-weight: bold`,
    "color: violet; font-weight: bold",
    data
  );
};

const headers = {
  "Content-Type": "application/json",
};

class HttpClient {
  instance = null;

  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      headers,
      timeout: API_REQUEST_TIMEOUT,
    });
    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(
      async (req) => {
        const token = await storage.getAccessToken();
        if (token) {
          req.headers["Authorization"] = `Bearer ${token}`;
        }

        requestLog(
          req.method,
          req.url,
          req,
          LogType.REQUEST,
          req.baseURL || ""
        );

        return req;
      },
      (error) => {
        log("request.error", error?.response?.data);
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  _handleResponse = (response) => {
    const {
      config: { method, url, baseURL },
    } = response;
    requestLog(method, url, response, LogType.RESPONSE, baseURL || "");
    return response;
  };

  _handleError = (error) => {
    const errorCode = error?.response?.status;
    const errorData = error?.response?.data;
    const config = error?.response?.config;
    const refreshToken = storage.getRefreshToken();

    // if (config.url === refershTokenUrl) {
    //   storage.removeToken();
    //   return Promise.reject(errorData);
    // }

    if (errorCode !== RESPONSE_CODE.TOKEN_EXPIRED) {
      return Promise.reject(errorData);
    }

    log("response.error", { error });
    // if (refreshToken) {
    //   this.instance
    //     .post(
    //       refershTokenUrl,
    //       qs.stringify({
    //         refresh_token: refreshToken,
    //         code_verifier: storage.getChallengeCodeVerifier(),
    //         device_id: "web",
    //       }),
    //       { baseURL: RESTFUL_AUTH_URL }
    //     )
    //     .then((token) => {
    //       storage.setRefreshToken(token?.data?.refresh_token);
    //       storage.setAccessToken(token?.data?.access_token);
    //       return new Promise((resolve, reject) => {
    //         axios
    //           .request({
    //             ...config,
    //             headers: {
    //               ...config?.headers,
    //               Authorization: `Bearer ${token?.data?.access_token}`,
    //             },
    //           })
    //           .then((response) => {
    //             resolve(response);
    //           })
    //           .catch((error) => {
    //             reject(error);
    //           });
    //       });
    //     })
    //     .catch((error) => {
    //       return Promise.reject(error);
    //     });
    // }
  };

  get = (
    url,
    params = {},
    config = {}
  ) => this.instance.get(url, { params, ...config });

  post = (
    url,
    data = {},
    config = {}
  ) => this.instance.post(url, data, { ...config });

  put = (
    url,
    data = {},
    config = {}
  ) => this.instance.put(url, data, { ...config });

  delete = (
    url,
    config = {}
  ) => this.instance.delete(url, { ...config });
}

export default HttpClient;
