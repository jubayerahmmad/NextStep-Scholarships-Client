const MyProfile = () => {
  return (
    <div className="px-4 flex flex-col items-center justify-center min-h-[calc(100vh-96px)]">
      <div className="rounded-2xl max-w-4xl border bg-base-100 shadow-2xl ">
        <figure>
          <img
            className="h-80 rounded-t-2xl object-cover"
            src="https://i.ibb.co.com/G3FNBnH/Yellow-Black-Brush-Twitter-Header.png"
            alt="background"
          />
        </figure>
        <div className="px-6 py-4 bg-teal-50 rounded-b-2xl">
          <div className="avatar -mt-16">
            <div className="ring-teal-600 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src="https://i.ibb.co.com/Zf8Bg9d/cubarsi.jpg" />
            </div>
          </div>
          <h2 className="card-title">
            Pau Cubarsi
            <span className="badge badge-accent badge-outline">User</span>
          </h2>
          <p>cucu@cubarsi.com</p>
          <div className="card-actions py-6">
            <button className="btn btn-sm btn-outline text-teal-600 hover:bg-teal-700 hover:border-teal-700">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
