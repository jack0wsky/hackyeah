"use client";

import React, { useEffect, useState } from "react";
import type { ISpot } from "@/types/index";
import { Input } from "@/modules/shared";
import { CITIES_WITH_EVENT_SPOTS } from "../../constants/event-spots";

export const Location = () => {
  const [city, setCity] = useState("");
  const [availableSpots, setAvailableSpots] = useState<ISpot[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<ISpot | null>(null);

  const findEventSpot = () => {
    const cityWithSpots = CITIES_WITH_EVENT_SPOTS.find((item) =>
      item.city.includes(city)
    );

    if (!cityWithSpots) return;

    setAvailableSpots(cityWithSpots.spots);
  };

  useEffect(() => {
    findEventSpot();
  }, [city]);

  return (
    <section className="mt-44 w-[740px]">
      <h2 className="text-3xl font-bold text-dark-blue">Location</h2>

      <div className="flex flex-col">
        <Input
          type="text"
          value={city}
          label="City"
          error={undefined}
          placeholder="Type city..."
          name="city"
          onChange={({ target }) => setCity(target.value)}
        />

        {!city && (
          <div className="w-full h-60 flex justify-center items-center">
            Type city and find sport object
          </div>
        )}

        {!!city && !!availableSpots.length && (
          <ul>
            {availableSpots.map((spot) => (
              <li key={spot.name}>
                <button onClick={() => setSelectedSpot(spot)}>
                  {spot.name}
                </button>
              </li>
            ))}
            <li>
              <button>Other</button>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};
