import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import UsersTableRow from "../../components/TableRows/UsersTableRow";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../components/Loader";

const AllUsers = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  // console.log(user?.email);

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      try {
        const { data } = await axiosPrivate(`/all-users/${user?.email}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) return <Loader />;
  // console.log(users);

  return (
    <div>
      <Heading
        Heading="Registered Users"
        subHeading="View and manage all registered users on the platform"
      ></Heading>
      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        {users.length > 0 ? (
          <>
            <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
              <table className="table ">
                {/* head */}
                <thead className="">
                  <tr>
                    <th>User Info</th>
                    <th>User Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row*/}
                  {users?.map((userData) => (
                    <UsersTableRow
                      key={userData?._id}
                      userData={userData}
                      refetch={refetch}
                    ></UsersTableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-4xl text-center font-bold">No Users Available!!</p>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
