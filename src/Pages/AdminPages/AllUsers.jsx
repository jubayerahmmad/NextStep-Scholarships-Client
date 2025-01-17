import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import UsersTableRow from "../../components/TableRows/UsersTableRow";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Loader from "../../components/Loader";
import { BiSort } from "react-icons/bi";
import { useState } from "react";

const AllUsers = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [sortOrder, setSortOrder] = useState("");

  console.log(sortOrder);

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
  // console.log(users);

  // const handleSort = async () => {
  //   setSortOrder();
  //   // refetch();
  // };

  return (
    <div>
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
                <thead className="">
                  <tr>
                    <th>User Info</th>
                    <th>User Email</th>
                    <th className="inline-flex items-center gap-1">
                      Role{" "}
                      {/* <button onClick={handleSort}>
                        <BiSort size={16} />
                      </button> */}
                    </th>
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
