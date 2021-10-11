import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

import { AuthContext } from './context';
import { authStorage } from './storage';

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = async () => {
    setUser(null);
    await authStorage.removeToken();
  };

  const logIn = async (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    await authStorage.storeToken(authToken);
  };

  return { user, logIn, logOut };
};
