import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [vesselName, setVesselName] = useState('');

  const navigate = useNavigate();

  const onSignIn = (event) => {
    event.preventDefault();
    console.log('Signed in with the following details:');
    console.log('Registration Number:', registrationNumber);
    console.log('Vessel Name:', vesselName);

    navigate('/start-navigation-for-vessel', { 
      state: { registration_number: registrationNumber, vessel_name: vesselName }
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/ship.png"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to Start Navigation
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSignIn} className="space-y-6">
            <div>
              <label htmlFor="registration-number" className="block text-md font-medium leading-6 text-gray-900">
                Registration Number
              </label>
              <div className="mt-2">
                <input
                  id="reg-number"
                  name="reg-number"
                  type="text"
                  required
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="vessel-name" className="block text-md font-medium leading-6 text-gray-900">
                  Vessel Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="vessel-name"
                  name="vessel-name"
                  type="text"
                  required
                  value={vesselName}
                  onChange={(e) => setVesselName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={onSignIn}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not registered your vessel yet?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Get Started Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
