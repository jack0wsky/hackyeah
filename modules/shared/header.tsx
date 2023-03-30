"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Button } from "@/modules/shared/button";
import { Logo } from "@/modules//shared/icons";
import { useAuth } from "@/store/index";
import { Routes } from "@/constants/routes";
import { useRouter } from "next/router";

const navigation = [
  { url: Routes.EventsList, label: "Less waste events" },
  { url: Routes.AboutUs, label: "About" },
  { url: Routes.Contact, label: "Contact" },
];

const MyAccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { removeToken } = useAuth();

  const { pathname } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative">
      <Button
        variant="text"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        Company
      </Button>

      {isOpen && (
        <ul className="absolute top-full py-8 px-12 bg-white shadow-lg">
          <li>
            <Link href={Routes.MyAccount}>My account</Link>
          </li>
          <li>
            <Link href={Routes.MyEvents}>My events</Link>
          </li>
          <li>
            <button onClick={removeToken}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  const { pathname } = useRouter();

  const { isLoggedIn, checkSession } = useAuth();

  useEffect(() => {
    checkSession();
  }, []);

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
            {isLoggedIn ? (
              <MyAccountDropdown />
            ) : (
              <Button variant="text" href="/for-organizators/register">
                For organizators
              </Button>
            )}
          </li>
        </ul>
      </nav>

      <nav className="flex md:hidden gap-x-12 items-center">
        <Link
          href={Routes.EventsList}
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
