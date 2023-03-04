import React from "react";
import Button from "../../shared/button";
import Filters from "../components/filters";
import List from "../components/list";

export const EventsList = () => {
  return (
    <main className="screen-size flex flex-col">
      <div className="w-full min-h-[108px] flex flex-col items-center md:flex-row justify-between p-24 bg-primary-blue/10 rounded-8 mt-24">
        <div>
          <p className="text-dark-blue uppercase text-[12px]">
            our less waste initiative
          </p>
          <p className="text-dark-blue text-[32px] font-light">
            Leave what you <span className="font-bold">do not want</span> and
            take what <span className="font-bold">you need</span>
          </p>
        </div>

        <Button variant="secondary">Find out more</Button>
      </div>

      <Filters />

      <List />
    </main>
  );
};
