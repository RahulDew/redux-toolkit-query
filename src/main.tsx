import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// for RTK Query with redux-redux
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// for RTK Query with redux-toolkit
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { MyApi } from "./redux/api.ts";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ApiProvider api={MyApi}>
//       <App />
//     </ApiProvider>
//   </React.StrictMode>
// );
