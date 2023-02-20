import React from "react";
import { useSelect } from "downshift";
import classNames from "classnames";

interface SelectProps {
  label?: string;
  items: { label: string }[];
  placeholder: string;
  onChange: (selected: string) => void;
}

export const SelectInput = ({ label, items, onChange, placeholder }: SelectProps) => {
  const {
    getLabelProps,
    getToggleButtonProps,
    selectedItem,
    getMenuProps,
    isOpen,
    getItemProps,
  } = useSelect({
    items,
    onStateChange: ({ selectedItem }) =>
      onChange(selectedItem?.label as string),
  });

  return (
    <label className="w-[200px] relative">
      {label && (
        <p className="text-dark-blue" {...getLabelProps()}>
          {label}
        </p>
      )}

      <div className="bg-gray-100 rounded-4 w-full">
        <div className="w-full flex flex-col gap-1 rounded-8">
          <div
            className="base-input flex justify-between cursor-pointer"
            {...getToggleButtonProps()}
          >
            <span>{selectedItem ? selectedItem.label : placeholder}</span>
            <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
          </div>
        </div>
        <ul
          {...getMenuProps()}
          className={classNames(
            "absolute w-full p-0 bg-white shadow-md max-h-80 overflow-y-scroll overflow-x-hidden z-[1]",
            { hidden: !isOpen }
          )}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <span>{item.label}</span>
              </li>
            ))}
        </ul>
      </div>
    </label>
  );
};
