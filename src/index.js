// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // 'react-dom/client'에서 createRoot를 가져옵니다.
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

// React 18의 createRoot를 사용하여 루트를 생성합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 루트에서 render 메서드를 호출하여 애플리케이션을 렌더링합니다.
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
