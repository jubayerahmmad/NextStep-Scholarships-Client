import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosPrivate = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  // request
  axiosPrivate.interceptors.request.use(
    (request) => {
      const token = localStorage.getItem("token");
      request.headers.authorization = `Bearer ${token}`;
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response(intercepts 401,403 status)
  axiosPrivate.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response?.status);
      const status = error.response.status;
      if (status === 401 || status === 403) {
        logOutUser().then(() => {
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosPrivate;
};

export default useAxiosPrivate;
