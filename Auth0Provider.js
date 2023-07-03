import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  const domain = "dev-4psdk2vhliijd61h.us.auth0.com";
  const clientId = "4Ya91x5NnIkq6pdhALdyU8wJ9uhRl99f";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
