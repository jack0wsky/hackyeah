import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  onChange: (event: ChangeEvent) => void;
  value: string;
  type: string;
  placeholder: string;
  name: string;
  error: string | null;
}

const Input = ({
  label,
  onChange,
  type,
  name,
  error,
  value,
  placeholder,
}: InputProps) => {
  return (
    <label className="flex flex-col">
      <p>{label}</p>
      <input
        className="px-8 py-4 border-1 border-black md:max-w-[300px] w-full"
        onChange={(event) => onChange(event)}
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
      />
      <p className="text-[12px] text-red w-max h-18">{error || ""}</p>
    </label>
  );
};

export default Input;
