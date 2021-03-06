import React from "react";
import Main from "./Components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
