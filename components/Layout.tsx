import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: ReactNode; isSticker?: boolean }> = ({
  children,
  isSticker,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer isSticker={isSticker} />
    </>
  );
};

export default Layout;
