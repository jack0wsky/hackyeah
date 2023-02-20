import React from "react";
import { IconProps } from "../../../types";

export const FoodIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 2V6.5C1 8.25781 2.30859 9.70312 4 9.94922V13H2V14H7V13H5V9.94922C6.69141 9.70312 8 8.25781 8 6.5V2H1ZM9 2V6.5C9 7.70312 9.86328 8.71484 11 8.94922V14H12V8.94922C13.1367 8.71484 14 7.70312 14 6.5V2H13V6.5C13 7.33594 12.3359 8 11.5 8C10.6641 8 10 7.33594 10 6.5V2H9ZM11 2V6.5C11 6.77734 11.2227 7 11.5 7C11.7773 7 12 6.77734 12 6.5V2H11ZM2 3H7V6.5C7 7.88672 5.88672 9 4.5 9C3.11328 9 2 7.88672 2 6.5V3Z"
      fill="#795E04"
    />
  </svg>
);
