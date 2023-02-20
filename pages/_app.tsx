import "../styles/globals.css";
import "../styles/date-picker.css";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { client } from "../clients/api-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
