
/**
 * This demo has been simplified to showcase just the buttons within sections.
 * See the main example for all the menu items.
 */

import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import HeaderUserMenu from "./HeaderUserMenu";

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiAvatar,
} from '@elastic/eui';

require("@elastic/eui/dist/eui_theme_light.css");



export default () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const renderLogo = (
    <EuiHeaderLogo
      iconType="logoElastic"
      href="#"
      onClick={(e) => e.preventDefault()}
      aria-label="Go to home page"
    />
  );

  const renderSpaces = (
    <EuiHeaderSectionItemButton aria-label="Spaces menu">
      <EuiAvatar type="space" name="Sales Team" size="s" />
    </EuiHeaderSectionItemButton>
  );

  const breadcrumbs = [
    {
      text: 'Management',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'Users',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'Create',
    },
  ];

  const history = useHistory();

  console.log(currentUser);

  const routeChange = () =>{ 
    if (currentUser) {
      localStorage.removeItem("user");
      
      //history.push(logout);

    }
    else
    {
    console.log("XXX");
    let path = 'loginmodal'; 
    history.push(path);
    }
  }

  const renderSearch = (
    <EuiHeaderSectionItemButton aria-label="Sitewide search">
      <EuiIcon type="search" size="m" />
    </EuiHeaderSectionItemButton>
  );
  const renderUser = (
    
    <HeaderUserMenu />
    
  );

  const renderApps = (
    <EuiHeaderSectionItemButton
      aria-label="Apps menu with 1 new app"
      notification="1">
      <EuiIcon type="apps" size="m" />
    </EuiHeaderSectionItemButton>
  );

  const sections = [
    {
      items: [renderLogo, renderSpaces],
      borders: 'right',
      breadcrumbs: breadcrumbs,
      breadcrumbProps: {
        'aria-label': 'Header sections breadcrumbs',
      },
    },
    {
      items: [renderSearch, renderUser, renderApps],
    },
  ];

  return <EuiHeader sections={sections} />;
};