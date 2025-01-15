import Heading from "../../components/Heading";
import UsersTableRow from "../../components/TableRows/UsersTableRow";

const AllUsers = () => {
  return (
    <div>
      <Heading
        Heading="Registered Users"
        subHeading="View and manage all registered users on the platform"
      ></Heading>
      {/* table */}
      <div className="max-w-7xl mx-auto my-6">
        <div className="overflow-x-auto shadow-2xl rounded-2xl animate__animated animate__fadeInUp">
          <table className="table ">
            {/* head */}
            <thead className="">
              <tr>
                <th>#</th>
                <th>User Info</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row*/}
              <UsersTableRow></UsersTableRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
