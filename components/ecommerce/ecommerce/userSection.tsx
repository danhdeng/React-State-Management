import React from 'react';
import { useUser } from '../../../customHooks/ecommerce/useUser';
export const UserSection = () => {
  const user = useUser();
  return <div>User: {user}</div>;
};
