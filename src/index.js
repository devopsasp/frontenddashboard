import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layoutcomp from "./components/Layoutcomp";
import ServiceCard from "./components/servicecard";
import BasicDateCalendar from "./NAttendance/Nattendance";
import Medical from "./components/medicalslip";
import Esicslip from "./components/EsiSlip";
import ButtonEsi from "./components/ButtonEsi";
import ButtonPrint from "./components/ButtonPrint";
import Buttonres from "./components/Buttonres";
import EmployeeDashBoard from "./components/EmployeeDashBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Layoutcomp />} />
        <Route path="/home" element={<ServiceCard />}></Route>
        <Route path="/calendar" element={<BasicDateCalendar />}></Route>
        <Route path="/medical" element={<ButtonPrint />}></Route>
        <Route path="/esi" element={<ButtonEsi />}></Route>
        <Route path="/resignation" element={<Buttonres />}></Route>
        <Route path="/dashboard" element={<EmployeeDashBoard />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
