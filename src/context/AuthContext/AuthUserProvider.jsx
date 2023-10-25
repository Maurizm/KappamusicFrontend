import { createContext, useState } from "react";

export const AuthUserContext = createContext();

function AuthUserProvider({ children }) {
  const [user, setUser] = useState(false);

  return (
    <AuthUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}
export default AuthUserProvider;
