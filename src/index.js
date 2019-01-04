import React from 'react';
import { render } from "react-dom";
import { SiteHeader } from "./lib";
import './lib/SiteHeader.scss';
import './index.scss';

import EdxLogo from './edx-sm.png';

import { MENU_ITEMS, SECONDARY_MENU_ITEMS } from './MenuItems.constants';

const App = () => (
  <div>
    <SiteHeader 
      menuItems={MENU_ITEMS}
      desktopMenuItems={MENU_ITEMS}
      logo={EdxLogo}
      logoDestination="https://edx.org"
      logoAltText="edX"
      secondaryMenuItems={SECONDARY_MENU_ITEMS}
    /> 
  </div>
);

render(<App />, document.getElementById("root"));
