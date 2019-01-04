import React from 'react';
import { render } from "react-dom";
import { SiteHeader } from "./lib";
import './lib/SiteHeader.scss';
import './index.scss';

import EdxLogo from './edx-sm.png';

import { MENU_ITEMS } from './MenuItems.constants';

const SECONDARY_MENU_ITEMS_DESKTOP = [
  // {
  //   content: "Sign in",
  //   triggerClassName: "btn-link",
  //   name: "sign-in",
  //   destination: "#",
  // },
  // {
  //   content: "Register",
  //   triggerClassName: "btn-primary",
  //   name: "register",
  //   destination: "#",
  // },
  {
    content: (<span>My Account</span>),
    triggerClassName: "btn-outline-secondary",
    name: "account",
    submenu: (
      <div>
      <a className="btn btn-primary btn-block mt-2 mb-3" href="#">Resume my last course</a>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link" href="#">My Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Courses</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Programs</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Account Settings</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Sign Out</a></li>
      </ul>
      </div>
    )
  },
]


const SECONDARY_MENU_ITEMS_MOBILE = [
  {
    content: "Sign in",
    triggerClassName: "btn-link",
    name: "sign-in",
    destination: "#",
  },
  {
    content: "Register",
    triggerClassName: "btn-primary",
    name: "register",
    destination: "#",
  },
  {
    content: (<span>My Account</span>),
    triggerClassName: "btn-outline-secondary",
    name: "account",
    submenu: (
      <div>
      <a className="btn btn-primary btn-block mt-2 mb-3" href="#">Resume my last course</a>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link" href="#">My Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Courses</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Programs</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
        <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Account Settings</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Sign Out</a></li>
      </ul>
      </div>
    )
  },
]

const App = () => (
  <div>
    <SiteHeader 
      menuItems={MENU_ITEMS}
      desktopMenuItems={MENU_ITEMS}
      logo={EdxLogo}
      logoDestination="https://edx.org"
      logoAltText="edX"
      secondaryMenuItems={SECONDARY_MENU_ITEMS_DESKTOP}
    /> 
  </div>
);

render(<App />, document.getElementById("root"));
