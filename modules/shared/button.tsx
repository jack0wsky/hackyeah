import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: string;
  variant: "primary" | "secondary" | "text";
  fullWidth?: boolean;
  disabled?: boolean;
}

const baseClass =
  "px-24 py-[13px] h-max flex justify-center items-center rounded-4";

const hover = "hover:bg-black hover:text-white";

const Button = ({
  href,
  onClick,
  children,
  variant,
  type = "button",
  fullWidth = false,
  disabled,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        className={classNames(baseClass, hover, {
          "bg-primary-blue text-white w-max": variant === "primary",
          "border-2 border-solid border-dark-blue bg-transparent text-black w-max":
            variant === "secondary",
          "p-0 text-primary-blue border-none hover:font-bold hover:bg-transparent hover:text-primary-blue":
            variant === "text",
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
        "bg-primary-blue text-white disabled:bg-primary-blue/50": variant === "primary",
        "border-2 border-solid border-dark-blue bg-transparent text-black w-max":
          variant === "secondary",
        "p-0 text-primary-blue border-none hover:font-bold hover:bg-transparent hover:text-primary-blue":
          variant === "text",
        "w-full": fullWidth,
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
