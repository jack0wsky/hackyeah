import Header from "./header";
import { ReactElement } from "react";
import Head from "next/head";

interface LayoutProps {
  title: string;
  children: ReactElement | ReactElement[];
}

const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Header />
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default Layout;
