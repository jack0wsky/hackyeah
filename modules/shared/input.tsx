import { ChangeEvent } from "react";
import classNames from "classnames";

interface BaseProps {
  label?: string;
  value: string;
  className?: string;
  error: string | undefined | null;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface DateInputProps extends BaseProps {
  type: "date" | "time";
  min?: string;
  disabled?: boolean;
  max?: string;
}

interface NumberInputProps extends Omit<BaseProps, "value"> {
  type: "number";
  value: number;
  min?: string;
  max?: string;
}

interface TextInputProps extends BaseProps {
  type: "text" | string;
  placeholder?: string;
}

type InputProps = TextInputProps | DateInputProps | NumberInputProps;

export const Input = (props: InputProps) => {
  const { onChange, type, label, error, className } = props;

  return (
    <label className={classNames("flex flex-col", className)}>
      {label && <p className="text-dark-blue/60 mb-1">{label}</p>}
      <input
        {...props}
        name={props.name}
        className="base-input w-full"
        id={props.name}
        onChange={onChange}
        placeholder={type === "text" ? props.placeholder : ""}
      />
      {error && (
        <p className="text-[12px] text-red w-max h-18">{error || ""}</p>
      )}
    </label>
  );
};
