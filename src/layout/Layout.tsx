import dynamic from 'next/dynamic'
import React, { PropsWithChildren } from "react";
const Header = dynamic(() => import('./header'), { ssr: true });
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
