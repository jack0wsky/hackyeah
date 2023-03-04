"use client";

import React, { useState } from "react";
import type { ILeftover } from "@/modules/add-event/leftovers/types";
import { format } from "date-fns";

interface ILeftoverProps {
  items: ILeftover[];
}

enum ViewMode {
  Table = "table",
  Grid = "grid",
}

export const Leftovers = ({ items }: ILeftoverProps) => {
  const [view, setView] = useState(ViewMode.Table);

  const generatePickupTime = (item: ILeftover) => {
    return `${format(new Date(item.dateStart), "dd.MM.yyyy")} ${
      item.timeStart
    }-${item.timeEnd}`;
  };

  return (
    <div className="w-full flex flex-col mt-10">
      <h2>Take if you want</h2>

      {view === ViewMode.Table && (
        <table className="w-full mt-24">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Type</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Pickup time</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                  {item.quantity} {item.unit}
                </td>
                <td>{generatePickupTime(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
