import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {Store} from './Redux/Slices/Store';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <BrowserRouter>
      <Provider store = {Store}>
         <App/>
         <Toaster/>
      </Provider>
   </BrowserRouter>
   
);
