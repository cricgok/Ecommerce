import React from 'react';

const LoginBanner = ({ isLoggedIn }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-4 text-center">
      {!isLoggedIn && (
        <div className="container">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Login to continue shopping! <a href="/login" className="text-primary hover:underline">Login</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginBanner;
