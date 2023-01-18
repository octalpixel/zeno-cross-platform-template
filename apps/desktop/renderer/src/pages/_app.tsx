import type { AppType } from "next/app";
import "../styles/globals.css";

import { store } from "$store";
import { trpc } from "$trpc";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default trpc.withTRPC(MyApp);
