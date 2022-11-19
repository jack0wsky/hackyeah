import classNames from "classnames";

interface PillProps {
  onClick?: () => void;
  active?: boolean;
  children: string;
}

const baseClass = "px-8 py-4 bg-black/10 w-max capitalize";

const Pill = ({ onClick, children, active }: PillProps) => {
  if (onClick) {
    return (
      <button
        className={classNames(baseClass, { "border-1 border-black": active })}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <p className={classNames(baseClass)}>{children}</p>;
};

export default Pill;
