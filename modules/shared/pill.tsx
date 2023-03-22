"use client";

import React from "react";
import classNames from "classnames";
import { EventLeftoverTypes } from "@/modules/events-list/types/event";

interface PillProps {
  onClick?: () => void;
  active?: boolean;
  icon: React.ReactNode;
  children: string;
}

const baseClass =
  "px-8 py-4 w-max uppercase font-bold rounded-4 flex items-center gap-x-2";

export const Pill = ({ onClick, children, active, icon }: PillProps) => {
  const isFood = children === EventLeftoverTypes.Food;
  const isGadgets = children === EventLeftoverTypes.Gadgets;
  const isOther = children === EventLeftoverTypes.Other;

  if (onClick) {
    return (
      <button
        className={classNames(baseClass, {
          "border-1 border-solid border-category-yellow-900 text-category-yellow-900":
            isFood,
          "border-1 border-solid border-category-green-900 text-category-green-900":
            isGadgets,
          "border-1 border-solid border-category-purple-900 text-category-purple-900":
            isOther,

          "border-1 border-category-yellow-200 bg-category-yellow-200 text-white":
            active && isFood,
          "border-1 border-category-green-200 bg-category-green-200 text-white":
            active && isGadgets,
          "border-1 border-category-purple-200 bg-category-purple-200 text-white":
            active && isOther,
        })}
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          onClick();
        }}
      >
        {icon}
        {children}
      </button>
    );
  }
  return (
    <p
      className={classNames(baseClass, {
        "bg-category-yellow-200 text-category-yellow-900": isFood,
        "bg-category-green-200 text-category-green-900": isGadgets,
        "bg-category-purple-200 text-category-purple-900": isOther,
      })}
    >
      {children}
    </p>
  );
};
