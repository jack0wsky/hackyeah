import classNames from "classnames";

interface PillProps {
  onClick?: () => void;
  active?: boolean;
  children: string;
}

const baseClass = "px-8 py-4 w-max uppercase font-bold rounded-4";

const Pill = ({ onClick, children, active }: PillProps) => {
  if (onClick) {
    return (
      <button
        className={classNames(baseClass, {
          "border-1 border-solid border-[#795E04] text-[#795E04]":
            children === "food",
          "border-1 border-solid border-[#004642] text-[#004642]":
            children === "gadgets",
          "border-1 border-solid border-[#65446D] text-[#65446D]":
            children === "other",
          "border-1 border-black bg-black text-[#ffffff]": active,
        })}
        onClick={onClick}
      >
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
