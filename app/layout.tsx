"use client";

import React, { ReactNode } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import { QueryClientProvider } from "react-query";
import { client } from "@/clients/api-client";
import Header from "@/modules/shared/header";
import NiceModal from "@ebay/nice-modal-react";
import { AddLeftoverModalView } from "@/modules/add-event";

NiceModal.register("add-leftover", AddLeftoverModalView);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />

          <NiceModal.Provider>
            <QueryClientProvider client={client}>
              {children}
            </QueryClientProvider>
          </NiceModal.Provider>
        </Provider>

        <div id="modal" />
      </body>
    </html>
  );
}
