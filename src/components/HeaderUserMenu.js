import ReactDOM from 'react-dom';
// import '@elastic/eui/dist/eui_theme_dark.css';
import '@elastic/eui/dist/eui_theme_light.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
  EuiAvatar,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
  EuiLink,
  EuiPopover,
  EuiPopoverFooter,
  EuiPopoverTitle,
  EuiSelectable,
  EuiSelectableMessage,
  EuiSelectableTemplateSitewide,
  EuiSpacer,
  EuiText,
  EuiGlobalToastList
} from '@elastic/eui';
import { htmlIdGenerator } from '@elastic/eui/lib/services';
import { logout } from '../actions/auth';





const HeaderUserMenu = () => {

  

  const { user: currentUser } = useSelector((state) => state.auth);
  
  const history = useHistory();
    const id = htmlIdGenerator()();
    const [isOpen, setIsOpen] = useState(false);


    const dispatch = useDispatch();

    const logOut = () => {
      //console.log("logout");
      dispatch(logout());
      
      setIsOpen(false);
    };
  
    const onMenuButtonClick = () => {
      if (!currentUser) {
      let path = 'loginmodal'; 
      history.push(path);
      return;  
    }  
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      
      setIsOpen(false);
    };
  
    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={id}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Account menu"
        onClick={onMenuButtonClick}>
        <EuiAvatar name={currentUser ? currentUser.username : ''} size="s" />
      </EuiHeaderSectionItemButton>
    );
  
    return (
      <EuiPopover
        id={id}
        ownFocus
        button={button}
        isOpen={isOpen}
        anchorPosition="downRight"
        closePopover={closeMenu}
        panelPaddingSize="none">
        <div style={{ width: 320 }}>
          <EuiFlexGroup
            gutterSize="m"
            className="euiHeaderProfile"
            responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiAvatar name={currentUser ? currentUser.username : ''} size="xl" />
            </EuiFlexItem>
  
            <EuiFlexItem>
              <EuiText>
                <p>{currentUser ? currentUser.username : ''}</p>
              </EuiText>
  
              <EuiSpacer size="m" />
  
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFlexGroup justifyContent="spaceBetween">
                    <EuiFlexItem grow={false}>
                      <EuiLink>Edit profile</EuiLink>
                    </EuiFlexItem>
  
                    <EuiFlexItem grow={false}>
                      <EuiLink onClick={() => logOut()} >Log out</EuiLink>
                      <ToastContainer />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            
          </EuiFlexGroup>
        </div>
        
        
        
      </EuiPopover>
      
    );
  };




export default HeaderUserMenu;