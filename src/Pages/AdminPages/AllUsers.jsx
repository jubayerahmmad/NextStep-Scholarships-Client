import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import UsersTableRow from "../../components/TableRows/UsersTableRow";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loaders/Loader";

const AllUsers = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [sortOrder, setSortOrder] = useState("");

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email, sortOrder],
    queryFn: async () => {
      try {
        const { data } = await axiosPrivate(
          `/all-users/${user?.email}?sort=${sortOrder}`
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <Helmet>
        <title>Manage Users || Admin Dashboard</title>
      </Helmet>
      <Heading
        Heading="Registered Users"
        subHeading="View and manage all registered users on the platform"
      ></Heading>

      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        <div className="my-6 flex items-center gap-3 justify-end">
          <p>Sort By: </p>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-teal-900 rounded-md px-2 py-1 text-white text-lg font-playfair"
            name="role"
            value={sortOrder}
          >
            <option value="">Role</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
            <option value="User">User</option>
          </select>
        </div>

        {users.length > 0 ? (
          <>
            <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
              <table className="table ">
                {/* head */}
                <thead className="bg-teal-500 text-gray-50">
                  <tr>
                    <th>User Info</th>
                    <th>User Email</th>
                    <th className="inline-flex items-center gap-1">Role </th>
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
