import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import firebaseConfig from "./firebase.config";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
    {/* </React.StrictMode> */}
  </Provider>
);
