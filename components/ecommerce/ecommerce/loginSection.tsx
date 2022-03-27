import React from 'react';
import { useLogin } from '../../../customHooks/ecommerce/useLogin';
import { useLogout } from '../../../customHooks/ecommerce/useLogout';

export const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();
  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
