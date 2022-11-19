import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: string;
}

const baseClass =
  "px-16 py-8 flex justify-center items-center w-max border-1 border-solid border-black";
const hover = "hover:bg-black hover:text-white";

const Button = ({ href, onClick, children }: ButtonProps) => {
  if (href) {
    return (
      <Link className={classNames(baseClass, hover)} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classNames(baseClass, hover)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
