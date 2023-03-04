"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/modules/shared/button";
import { Logo } from "@/modules//shared/icons";

const navigation = [
  { url: "/events-list", label: "Less waste events" },
  { url: "/about", label: "About" },
  { url: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="screen-size mx-auto h-[80px] w-full flex justify-between items-center">
      <div>
        <Logo className="w-[100px] md:w-[207px]" />
      </div>
      <nav className="hidden w-1/2 h-full md:flex">
        <ul className="w-full h-full flex items-center justify-between">
          {navigation.map(({ url, label }) => (
            <li key={url}>
              <Link
                href={url}
                className={classNames({ "font-bold": pathname === url })}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Button variant="text" href="/for-organizators/register">
              For organizators
            </Button>
          </li>
        </ul>
      </nav>

      <nav className="flex md:hidden gap-x-12 items-center">
        <Link
          href="/events-list"
          className={classNames({
            "font-bold": "/events-list" === pathname,
          })}
        >
          Less waste events
        </Link>
        <Button variant="text" href="/for-organizators/register">
          For organizators
        </Button>
      </nav>
    </header>
  );
};

export default Header;
