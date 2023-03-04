"use client";

import React, { ReactNode } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";
import { QueryClientProvider } from "react-query";
import { client } from "../clients/api-client";
import Header from "../modules/shared/header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <Provider store={store}>
          <QueryClientProvider client={client}>{children}</QueryClientProvider>
        </Provider>

        <div id="modal" />
      </body>
    </html>
  );
}
