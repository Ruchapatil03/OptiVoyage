// src/components/NavBar.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../authContext'; // Adjust the import path as needed

export const links = [
  { title: 'Home', url: '/' },
  { title: 'Register Vessel', url: '/register-vessel' },
  { title: 'Start Navigation', url: '/start-navigation' },
  { title: 'Support', url: '/support' },
  { title: 'Assessment Reports', url: '/vessel-assessment-reports' },
];

export default function NavBar() {
  const location = useLocation();
  const { user, logout } = useAuth(); // Get user and logout from AuthContext

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className={`navbar w-full ${isHomePage ? 'bg-transparent' : 'bg-transparent'}`}>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 font-bold text-4xl px-2">VIPIO⚓</div>
          <div className="hidden flex-none lg:block">
            {user ? (
              <ul className="menu menu-horizontal">
                {links.map((link, index) => (
                  <li className="text-md font-semibold" key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
          {/* Logout button and User profile picture */}
          <div className="flex-none lg:flex items-center ml-auto">
            {user && (
              <button
                onClick={logout}
                className="btn btn-sm btn-outline mr-4"
              >
                Logout
              </button>
            )}
            {user ? (
              <span className="text-md font-semibold">
                  Hello, {user.displayName || 'User'}
                </span>
            ) : <></>}
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
