import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
  email: string;
  password: string;
}

interface AuthContextData {
  loged: boolean;
  user: User | null;
  logIn(): Promise<void>;
  logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function loadStorageData() {
      const storagedUSer = await localStorage.getItem('@Auth:user');
      const storagedToken = await localStorage.getItem('@Auth:token');

      // await new Promise(resolve => setTimeout(resolve, 2000));

      if (storagedUSer && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUSer));
      }
    }

    loadStorageData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function logIn() {
    const response = await auth.logIn();

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await localStorage.setItem('@Auth:user', JSON.stringify(response.user));
    await localStorage.setItem('@Auth:token', response.token);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function logOut() {
    localStorage.removeItem('@Auth:user');
    localStorage.removeItem('@Auth:token');
    window.location.reload();
  }

  return (
    <AuthContext.Provider value={{ loged: Boolean(user), user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
