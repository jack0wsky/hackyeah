import React from "react";
import "@testing-library/jest-dom";
import { EventsList } from "../modules/events-list/view/events-list";
import Filters from "../modules/events-list/components/filters";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { client } from "../clients/api-client";
import { store } from "../store";
import { getByPlaceholderText, render } from "@testing-library/react";
import { toJSON } from "yaml/util";

describe(EventsList.name, () => {
  const component = render(
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Filters />
      </QueryClientProvider>
    </Provider>
  );

  it("renders list of events", async () => {
    const button = await getByPlaceholderText(
      component.baseElement,
      "Search..."
    );

    button

    expect(toJSON(component.baseElement)).toMatchInlineSnapshot(`""`);
  });
});
