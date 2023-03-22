import React from "react";
import { AddLeftoverForm } from "@/modules/add-event/leftovers/add-leftover-form";
import { ILeftover } from "@/modules/add-event/leftovers/types";
import { useStore } from "@/store/index";
import { Button, Pill } from "@/modules/shared";
import { format } from "date-fns";
import NiceModal from "@ebay/nice-modal-react";
import { LeftoverCard } from "@/modules/event/components/leftover-card";

interface TableRowProps {
  leftover: ILeftover;
  onRemove: (id: string) => void;
}

const TableRow = ({ leftover, onRemove }: TableRowProps) => {
  const date = format(new Date(leftover.dateStart), "dd.MM.yyyy");

  return (
    <tr className="w-full table-auto" key={leftover.name}>
      <td className="py-20 table-auto w-1/6">{leftover.name}</td>
      <td className="py-20 table-auto w-1/6">
        <Pill icon={<div />}>{leftover.type}</Pill>
      </td>
      <td className="py-20 table-auto w-1/6">
        {leftover.quantity} {leftover.unit}
      </td>
      <td className="py-20 w-1/6 table-auto">{date}</td>
      <td className="py-20 w-2/6 table-auto flex gap-x-8">
        <button className="px-20 flex py-12 rounded-12 bg-primary-blue/20 text-primary-blue">
          Edit
        </button>
        <button
          onClick={() => onRemove(leftover.id)}
          className="bg-red/20 text-red px-20 py-12 rounded-12"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export const Leftovers = () => {
  const { setLeftovers, removeLeftover, addEvent, openModal } = useStore();

  const openFormModal = () => {
    NiceModal.show("add-leftover");
  };

  return (
    <section className="mt-32 w-[740px]">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-dark-blue">
          What do you offer?
        </h2>

        <Button variant="secondary" onClick={openFormModal}>
          Add item
        </Button>
      </div>

      <ul className="grid grid-cols-2 gap-20 mb-44">
        {addEvent.leftovers.map((leftover) => (
          <LeftoverCard
            key={leftover.id}
            editable
            itemType={leftover.type}
            name={leftover.name}
            amount={`${leftover.quantity} ${leftover.unit}`}
            dateRange=""
            onEdit={() => {}}
            onRemove={() => {}}
          />
        ))}
      </ul>
    </section>
  );
};

/*
<table className="w-full table-auto mt-12">
        <thead className="w-full">
          <tr className="w-full">
            <th className="w-1/6 text-left">Name</th>
            <th className="w-1/6 text-left">Type</th>
            <th className="w-1/6 text-left">Quantity</th>
            <th className="w-1/6 text-left">Pickup time</th>
            <th className="w-1/6 text-left" />
            <th className="w-1/6 text-left" />
          </tr>
        </thead>
        <tbody className="table-auto w-full">
          {addEvent.leftovers.map((item) => (
            <TableRow leftover={item} key={item.id} onRemove={removeLeftover} />
          ))}
        </tbody>
      </table>
 */
