import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './AuthProvider';
import logo from '../assets/logo.png';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/');
    } catch {
      toast.error('Failed to logout');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="navbar py-3">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="WarmPaws Logo" className="w-12 h-8 object-contain" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                WarmPaws
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-none hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  About Us
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    to="/my-profile"
                    className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                  >
                    My Profile
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Auth Section */}
          <div className="flex-none gap-2 ml-4">
            {user ? (
              <div className="flex items-center gap-3">
                {/* Logout Button visible in Navbar when logged in */}
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="hidden lg:inline btn btn-outline btn-sm border-red-500 text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50"
                >
                  {isLoading ? 'Logging out...' : 'Logout'}
                </button>

                {/* User Avatar with Dropdown */}
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar relative group"
                    title={user.displayName || 'User'}
                  >
                    <div className="w-10 rounded-full ring ring-orange-400 ring-offset-2">
                      <img
                        src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=ff6b35&color=fff`}
                        alt={user.displayName || 'User'}
                      />
                    </div>
                    <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {user.displayName || 'User'}
                    </span>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-white rounded-box w-52 border border-gray-200"
                  >
                    <li className="px-4 py-2 font-semibold text-gray-700 border-b">
                      {user.displayName || 'User'}
                    </li>
                    <li>
                      <Link to="/my-profile" className="text-gray-700 hover:text-orange-500">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        disabled={isLoading}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 disabled:opacity-50"
                      >
                        {isLoading ? 'Logging out...' : 'Logout'}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex gap-2">
                <Link to="/login">
                  <button className="btn btn-outline btn-sm border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-sm bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none hover:from-orange-600 hover:to-pink-600">
                    Register
                  </button>
                </Link>
              </div>
            )}

            {/* Mobile menu view */}
            <div className="dropdown dropdown-end lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 border border-gray-200"
              >
                <li>
                  <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
                </li>
                <li>
                  <Link to="/service" className="text-gray-700 hover:text-orange-500">Services</Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-700 hover:text-orange-500">About Us</Link>
                </li>
                {user && (
                  <li>
                    <Link to="/my-profile" className="text-gray-700 hover:text-orange-500">My Profile</Link>
                  </li>
                )}
                {!user && (
                  <>
                    <li className="mt-2 border-t pt-2">
                      <Link to="/login" className="text-orange-500 hover:bg-orange-50">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup" className="text-orange-500 hover:bg-orange-50">Register</Link>
                    </li>
                  </>
                )}
                {user && (
                  <li className="mt-2 border-t pt-2">
                    <button
                      onClick={handleLogout}
                      disabled={isLoading}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 disabled:opacity-50"
                    >
                      {isLoading ? 'Logging out...' : 'Logout'}
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;