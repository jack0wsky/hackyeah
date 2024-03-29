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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon-16x16.png"
      />
      <link rel="manifest" href="/public/site.webmanifest" />
    </Head>
    {children}
  </>
);

export default Layout;
