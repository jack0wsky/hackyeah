import React from "react";
import { EventLeftoverTypes } from "@/modules/events-list/types/event";
import classNames from "classnames";
import { PencilInSquareIcon, TrashIcon } from "@/modules/shared/icons";

interface ILeftoverCardBaseProps {
  itemType: EventLeftoverTypes;
  name: string;
  amount: string;
  editable: boolean;
  dateRange: string;
  onEdit?: () => void;
  onRemove?: () => void;
}

const Header = ({
  name,
  amount,
  itemType,
}: Pick<ILeftoverCardBaseProps, "name" | "amount" | "itemType">) => (
  <div className="w-full flex justify-between items-center">
    <div className="flex items-center gap-x-8">
      <div
        className={classNames("w-32 h-32 rounded-4", {
          "bg-category-yellow-200": itemType === EventLeftoverTypes.Food,
          "bg-category-green-200": itemType === EventLeftoverTypes.Gadgets,
          "bg-category-purple-200": itemType === EventLeftoverTypes.Other,
        })}
      ></div>
      <p>{name}</p>
    </div>

    <p>{amount}</p>
  </div>
);

const EditControls = ({
  onEdit,
  onRemove,
}: Pick<ILeftoverCardBaseProps, "onEdit" | "onRemove">) => {
  return (
    <div className="flex items-center justify-between h-36 mt-16 border-t border-t-gray-200">
      <button
        onClick={onEdit}
        className="text-primary-blue flex justify-center items-center gap-x-8 w-full h-full"
      >
        <PencilInSquareIcon />
        Edit
      </button>
      <button
        onClick={onRemove}
        className="text-red flex justify-center items-center gap-x-8 w-full h-full"
      >
        <TrashIcon />
        Remove
      </button>
    </div>
  );
};

export const LeftoverCard = ({
  itemType,
  name,
  amount,
  editable = false,
  dateRange,
  onEdit,
  onRemove,
}: ILeftoverCardBaseProps) => {
  return (
    <li className="flex flex-col px-16 pt-16 pb-8 rounded-12 shadow-xl">
      <CardElements.Header name={name} amount={amount} itemType={itemType} />

      <p>{dateRange}</p>

      {editable && (
        <CardElements.EditControls
          onEdit={onEdit as () => void}
          onRemove={onRemove as () => void}
        />
      )}
    </li>
  );
};

const CardElements = {
  Header,
  EditControls,
};
