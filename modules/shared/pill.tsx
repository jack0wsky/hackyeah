import React, { MouseEventHandler } from "react";
import classNames from "classnames";

interface PillProps {
  onClick?: () => void;
  active?: boolean;
  icon: React.ReactNode;
  children: string;
}

const baseClass =
  "px-8 py-4 w-max uppercase font-bold rounded-4 flex items-center gap-x-2";

const foodClasses = "border-1 border-solid border-[#795E04] text-[#795E04]";
const gadgetsClasses = "border-1 border-solid border-[#004642] text-[#004642]";
const otherClasses = "border-1 border-solid border-[#65446D] text-[#65446D]";

const Pill = ({ onClick, children, active, icon }: PillProps) => {
  if (onClick) {
    return (
      <button
        className={classNames(baseClass, {
          foodClasses: children === "food",
          gadgetsClasses: children === "gadgets",
          otherClasses: children === "other",
          "border-1 border-black bg-black text-[#ffffff]": active,
        })}
        onClick={() => onClick()}
      >
        {icon}
        {children}
      </button>
    );
  }
  return (
    <p
      className={classNames(baseClass, {
        "bg-[#FCEBA4] text-[#795E04]": children === "Food",
        "bg-[#A7DAD8] text-[#004642]": children === "Gadgets",
        "bg-[#DFDDEE] text-[#65446D]": children === "Other",
      })}
    >
      {children}
    </p>
  );
};

export default Pill;
