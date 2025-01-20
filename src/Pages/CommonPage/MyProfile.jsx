import { useState } from "react";
import UpdateUserModal from "../../components/Modals/UpdateUserModal";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user } = useAuth();
  const [isModalOpen, setisModalOpen] = useState(false);
  const { role, isLoading } = useRole();
  if (isLoading) return <Loader />;
  return (
    <div className="px-4 flex flex-col items-center justify-center min-h-[calc(100vh-96px)]">
      <Helmet>
        <title>My Profile || Dashboard</title>
      </Helmet>
      <div className="rounded-2xl max-w-4xl border bg-base-100 shadow-2xl ">
        <figure>
          <img
            className="h-80 rounded-t-2xl object-cover"
            src="https://i.ibb.co.com/G3FNBnH/Yellow-Black-Brush-Twitter-Header.png"
            alt="background"
          />
        </figure>
        <div className="px-6 py-4 bg-gradient-to-bl from-teal-300 via-teal-100 to-teal-50 rounded-b-2xl">
          <div className="avatar -mt-16">
            <div className="ring-teal-600 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img referrerPolicy="no-referrer" src={user?.photoURL} />
            </div>
          </div>
          <h2 className="card-title">
            {user?.displayName}
            {role !== "User" && (
              <span className="badge badge-accent">{role}</span>
            )}
          </h2>
          <p> {user?.email}</p>
          <div className="card-actions py-6">
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
