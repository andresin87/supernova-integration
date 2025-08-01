import { useUser } from '@auth0/nextjs-auth0';
import React, { useState } from 'react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold h-5 c-white">
            <img alt="home page text-current" src="/ij-logo-default_primary.svg" height="100%" width="120px"/>
          </div>
          <button onClick={toggle} className="text-white md:hidden">
            Menu
          </button>
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <a href="/" className="text-white px-4 py-2">
              Home
            </a>
            {user && (
              <>
                <a href="/ssr" className="text-white px-4 py-2">
                  ssr
                </a>
                <a href="/profile" className="text-white px-4 py-2">
                  profile
                </a>
              </>
            )}
            {!isLoading && !user && (
              <a href="/auth/login" className="text-white px-4 py-2">
                Login
              </a>
            )}
            {!isLoading && user && (
              <a href="/auth/logout" className="text-white px-4 py-2">
                Logout
              </a>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
