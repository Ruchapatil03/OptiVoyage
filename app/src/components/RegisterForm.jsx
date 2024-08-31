import { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function RegForm() {
  const [vesselInfo, setVesselInfo] = useState({
    vesselName: '',
    registrationNumber: '',
    ownerName: '',
    vesselType: '',
    flagState: '',
    yearBuilt: '',
    grossTonnage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVesselInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vesselInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 flex flex-col items-center">
        <div className="border-b border-gray-900/10 text-center text-lg p-8 pb-7 bg-[#EBF5FB]/50 mt-10 mb-10 rounded-2xl">
          <h2 className="font-semibold leading-7 text-gray-900">Vessel Registration Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please provide accurate information about the vessel and its ownership for registration purposes.</p>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="vesselName" className="block text-sm font-medium leading-6 text-gray-900">
                Vessel Name
              </label>
              <div className="mt-2">
                <input
                  id="vesselName"
                  name="vesselName"
                  type="text"
                  value={vesselInfo.vesselName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="registrationNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Registration Number
              </label>
              <div className="mt-2">
                <input
                  id="registrationNumber"
                  name="registrationNumber"
                  type="text"
                  value={vesselInfo.registrationNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6 flex justify-center">
              <div className="sm:col-span-4 flex flex-col items-center w-full">
                <label htmlFor="ownerName" className="block text-sm font-medium leading-6 text-gray-900">
                  Owner's Name
                </label>
                <div className="mt-2 w-full max-w-sm">
                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    value={vesselInfo.ownerName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-6 flex justify-center">
              <div className="sm:col-span-3 flex flex-col items-center w-full">
                <label htmlFor="vesselType" className="block text-sm font-medium leading-6 text-gray-900">
                  Vessel Type
                </label>
                <div className="mt-2 w-full max-w-sm">
                  <select
                    id="vesselType"
                    name="vesselType"
                    value={vesselInfo.vesselType}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select type</option>
                    <option value="Cargo">Cargo</option>
                    <option value="Tanker">Tanker</option>
                    <option value="Passenger">Passenger</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Recreational">Recreational</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="flagState" className="block text-sm font-medium leading-6 text-gray-900">
                Flag State
              </label>
              <div className="mt-2">
                <input
                  id="flagState"
                  name="flagState"
                  type="text"
                  value={vesselInfo.flagState}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="yearBuilt" className="block text-sm font-medium leading-6 text-gray-900">
                Year Built
              </label>
              <div className="mt-2">
                <input
                  id="yearBuilt"
                  name="yearBuilt"
                  type="text"
                  value={vesselInfo.yearBuilt}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="grossTonnage" className="block text-sm font-medium leading-6 text-gray-900">
                Gross Tonnage
              </label>
              <div className="mt-2">
                <input
                  id="grossTonnage"
                  name="grossTonnage"
                  type="text"
                  value={vesselInfo.grossTonnage}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "4vh" }}>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-teal-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

    </form>
  );
}
