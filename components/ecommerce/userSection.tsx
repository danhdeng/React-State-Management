import React from 'react';
import { useUser } from '../../customHooks/store/useUser';
export const UserSection = () => {
  const user = useUser();
  return <div>User: {user}</div>;
};
