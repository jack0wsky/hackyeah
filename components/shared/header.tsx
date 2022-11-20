import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Button from "./button";

const navigation = [
  { url: "/events-list", label: "Less waste event" },
  { url: "/about", label: "About" },
  { url: "/contact", label: "Contact" },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="screen-size mx-auto h-[70px] w-full flex justify-between items-center">
      <div>
        <p>Logo</p>
      </div>
      <nav className="w-1/2 h-full flex">
        <ul className="w-full h-full flex items-center justify-between">
          {navigation.map(({ url, label }) => (
            <li key={url}>
              <Link
                href={url}
                className={classNames({ "font-bold": url === router.pathname })}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Button variant='secondary' href='/for-organizators/register'>For organizators</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
