import Header from "./header";
import { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout
