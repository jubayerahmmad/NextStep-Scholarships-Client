import { useState } from "react";

const AddScholarshipForm = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-200 rounded-lg mt-10">
      <p className="text-2xl font-bold text-teal-800 text-center mb-6">
        Scholarship Application Details
      </p>

      {/* form */}
      <form className="space-y-5">
        {/* Uni and Scholarship Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Scholarship*/}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Scholarship Name
            </label>
            <input
              type="text"
              name="scholarshipName"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              placeholder="Enter the scholarship name"
            />
          </div>
          {/* University*/}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              University Name
            </label>
            <input
              type="text"
              name="universityName"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              placeholder="Enter the university name"
            />
          </div>
        </div>

        {/* University Image */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            University Image/Logo
          </label>

          <input
            type="file"
            className="mt-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:font-bold file:bg-teal-100 file:text-teal-700 hover:file:bg-teal-100"
          />
        </div>

        {/* Country and City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              placeholder="Enter the country"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              placeholder="Enter the city"
            />
          </div>
        </div>

        {/* Subject & Scholarship Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject Category
            </label>
            <select
              name="subjectCategory"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
            >
              <option value="">Select a Subject</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          {/* Scholarship */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Scholarship Category
            </label>
            <select
              name="scholarshipCategory"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
            >
              <option value="">Select a Scholarship</option>
              <option value="Full fund">Full fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-fund</option>
            </select>
          </div>
        </div>

        {/* Degree */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Degree
          </label>
          <select
            name="degree"
            className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
          >
            <option value="">Select a degree</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        {/* Tuition, application Fees, service charge */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* tution */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tuition Fees (Optional)
            </label>
            <input
              type="number"
              name="tuitionFees"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              placeholder="Enter tuition fees"
            />
          </div>
          {/* Application */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application Fees
            </label>
            <input
              type="number"
              name="applicationFees"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              placeholder="Enter application fees"
            />
          </div>
          {/* service charge */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Charge
            </label>
            <input
              type="number"
              name="serviceCharge"
              className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
              placeholder="Enter Service Charge"
            />
          </div>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="mt-1 block w-full rounded-md px-4 py-2 outline-teal-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddScholarshipForm;
