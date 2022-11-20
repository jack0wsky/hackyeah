import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: string;
  variant: "primary" | "secondary";
  fullWidth?: boolean;
}

const baseClass = "px-16 py-8 flex justify-center items-center";

const hover = "hover:bg-black hover:text-white";

const Button = ({
  href,
  onClick,
  children,
  variant,
  type = "button",
  fullWidth = false,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        className={classNames(baseClass, hover, {
          "bg-primary-blue text-white w-full": variant === "primary",
          "border-1 border-solid border-black bg-white text-black w-full":
            variant === "secondary",
          "w-full": fullWidth,
        })}
        href={href}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={classNames(baseClass, hover, {
        "bg-primary-blue text-white w-max": variant === "primary",
        "border-1 border-solid border-black bg-white text-black w-max":
          variant === "secondary",
        "w-full": fullWidth,
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
