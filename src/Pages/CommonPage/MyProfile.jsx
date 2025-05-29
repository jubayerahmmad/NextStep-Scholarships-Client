import { useState } from "react";
import UpdateUserModal from "../../components/Modals/UpdateUserModal";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/Loaders/Loader";

const MyProfile = () => {
  const { user } = useAuth();
  const [isModalOpen, setisModalOpen] = useState(false);
  const { role, isLoading } = useRole();
  const axiosPublic = useAxiosPublic();
  const { data: userInfo, isPending } = useQuery({
    queryKey: ["userdata"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/user/${user?.email}`);
      return data;
    },
  });
  if (isLoading || isPending) return <Loader />;
  return (
    <div className="min-h-[calc(100vh-96px)]">
      <Helmet>
        <title>My Profile || Dashboard</title>
      </Helmet>
      <figure>
        <img
          className="h-96 w-full object-cover"
          src="https://i.ibb.co.com/G3FNBnH/Yellow-Black-Brush-Twitter-Header.png"
          alt="background"
        />
      </figure>
      <div className="rounded-2xl w-full bg-base-100">
        <div className="px-6 py-4">
          <div className="avatar -mt-16">
            <div className="ring-teal-600 ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
              <img referrerPolicy="no-referrer" src={user?.photoURL} />
            </div>
          </div>
          <h2 className="text-2xl font-bold flex items-center gap-3">
            {user?.displayName}
            <span className="badge badge-accent">{role}</span>
          </h2>
          <div className="py-2 space-y-2">
            <h3 className="font-bold text-xl font-playfair">Profile Info</h3>
            <hr />
            <p>
              Full Name: <span>{user?.displayName}</span>
            </p>
            <p>
              Email : <span>{user?.email}</span>
            </p>
            <p>
              Phone : <span>{userInfo?.phone ? userInfo?.phone : "N/A"}</span>
            </p>
            <p>
              Address :{" "}
              <span>{userInfo?.address ? userInfo?.address : "N/A"}</span>
            </p>

            <button
              onClick={() => setisModalOpen(true)}
              className="btn btn-sm btn-outline text-teal-600 hover:bg-teal-700 hover:border-teal-700"
            >
              Update Profile
            </button>
          </div>
        </div>
        <UpdateUserModal
          isModalOpen={isModalOpen}
          setisModalOpen={setisModalOpen}
        />
      </div>
    </div>
  );
};

export default MyProfile;
