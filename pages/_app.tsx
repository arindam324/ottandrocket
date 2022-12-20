import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../context/useProvider";
import UserDetailsProvider from "../context/userDetailsProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <UserDetailsProvider>
        <Component {...pageProps} />
      </UserDetailsProvider>
    </UserProvider>
  );
}

export default MyApp;
