import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const navigation = [
  { url: "/events-list", label: "Events list" },
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
