import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useRole = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { data: role = {} } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/user-role/${user?.email}`);
      return data;
    },
  });
  //   console.log(role);
  return role;
};

export default useRole;
