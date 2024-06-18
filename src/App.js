import logo from "./logo.svg";
import "./App.css";

import MainPage from "./components/nav";
import ServiceCard from "./components/servicecard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";
import Layoutcomp from "./components/Layoutcomp";
import EmployeeDashBoard from "./components/EmployeeDashBoard";
import Loginpage from "./components/Login";
import BasicDateCalendar from "./NAttendance/Nattendance";
function App() {
  return (
    <div>
      {/* <EmployeeDashBoard /> */}
      <BasicDateCalendar />
      {/* <br />
      <br />
      <br />
      <br />
      <MainPage />
      <Outlet></Outlet>
  <Loginpage /> */}
    </div>
  );
}

export default App;
