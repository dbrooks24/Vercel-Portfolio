import dynamic from "next/dynamic";
import React, { PropsWithChildren } from "react";
const NavBar = dynamic(() => import("./NavBar"), { ssr: true });
const Header = dynamic(() => import("./Header"), { ssr: true });
const Footer = dynamic(() => import("./Footer"), { ssr: true });
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col">
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
