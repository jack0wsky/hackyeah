import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { store } from "@/store/index";
import Header from "@/modules/shared/header";
import NiceModal from "@ebay/nice-modal-react";
import { AddLeftoverModalView } from "@/modules/add-event";
import { client } from "@/clients/api-client";
import "../styles/globals.css";

NiceModal.register("add-leftover", AddLeftoverModalView);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />

      <NiceModal.Provider>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </NiceModal.Provider>
    </Provider>
  );
}
