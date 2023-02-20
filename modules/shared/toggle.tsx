import React, { useState } from "react";
import classNames from "classnames";

interface ToggleProps {
  checked: boolean;
  onToggle: (value: boolean) => void;
}

export const Toggle = ({ checked, onToggle }: ToggleProps) => {
  return (
    <label
      className={classNames(
        "w-44 h-28 px-1 flex justify-start items-center cursor-pointer rounded-full relative transition-colors translate-x-",
        { "bg-gray-200": !checked },
        { "bg-primary-blue": checked }
      )}
    >
      <input
        checked={checked}
        onChange={() => {
          onToggle(checked);
        }}
        type="checkbox"
        className="hidden"
      />
      <div
        className={classNames(
          "h-20 w-20 rounded-full bg-white translate-x-0 transition-transform",
          {
            "translate-x-[16px]": checked,
          }
        )}
      />
    </label>
  );
};
