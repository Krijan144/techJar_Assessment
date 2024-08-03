import axios, { AxiosError, AxiosInstance } from "axios";
import { logout, setIsLoading, setNotification } from "./store/app/actions";

const apiUrl = import.meta.env.VITE_API_PUBLIC_URL;

export const network = ({ dispatch, requireToken = true }): AxiosInstance => {
  const axiosConfig = {
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": "en",
    },
  };

  if (requireToken) {
    axiosConfig.headers.Authorization = `Token ${sessionStorage.getItem("token")}`;
  }

  const clientRequest = axios.create(axiosConfig);

  clientRequest.interceptors.request.use(
    (conf) => conf,
    (error: AxiosError) => Promise.reject(error)
  );

  clientRequest.interceptors.response.use(
    (conf) => {
      if (conf.status) {
        let action = "";
        switch (conf.config.method) {
          case "get":
            action = "Fetched";
            break;
          case "post":
            action = "Created";
            break;
          case "put":
            action = "Updated";
            break;
          case "patch":
            action = "Updated";
            break;
          case "delete":
            action = "Deleted";
            break;
        }

        dispatch(
          setNotification({
            name: "Action",
            message: `Successfully ${action}`,
            level: "success",
          })
        );
      }
      return conf;
    },
    (error: AxiosError) => {
      if (error.message === "timeout of 15000ms exceeded") {
        // if (error) {
        dispatch(
          setNotification({
            name: "Network",
            message: "Network Timeout Reached",
            level: "error",
          })
        );
        dispatch(setIsLoading(false));
        localStorage.setItem("timeoutRedirect", window.location.href);
        window.location.href = "/timeout";
      }

      if (error.response && error.response.status === 401) logout();

      return Promise.reject(error);
    }
  );

  return clientRequest;
};
