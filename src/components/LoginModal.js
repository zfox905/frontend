import React, { useState, Fragment } from 'react';

import { useDispatch, useSelector } from "react-redux";





import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiRange,
  EuiSwitch,
  EuiCodeBlock,
  EuiSpacer,
  EuiFieldPassword,
  EuiText,
} from '@elastic/eui';

import { htmlIdGenerator } from '@elastic/eui/lib/services';

import { login } from "../actions/auth";

import { showToast } from "../actions/toast";

import { useHistory } from "react-router-dom";


const  LoginModal = (visible) => {
  const [isModalVisible, setIsModalVisible] = useState(visible);

  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    
      dispatch(login(value, value1))
        .then(() => {
          history.push("/profile");
          //window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
        
        

    };
 
    


  const closeModal = () => { 
    setIsModalVisible(false);
    history.push("/");
  }

  const showModal = () => setIsModalVisible(true);

  

  const formSample = (
    <EuiForm>


      <EuiFormRow label="Username">
        <EuiFieldText 
        placeholder="Korisnicko ime"
        value={value}
      onChange={(e) => setValue(e.target.value)}
        name="username" />
      </EuiFormRow>

      

      <EuiSpacer />

      <EuiFormRow label="Password">
      <EuiFieldPassword 
      placeholder="Lozinka"
      value={value1}
      onChange={(e) => setValue1(e.target.value)}
      name="password" />
      </EuiFormRow>


    </EuiForm>
  );

 

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiOverlayMask>
        <EuiModal onClose={closeModal} initialFocus="[name=popswitch]">
          <EuiModalHeader>
            <EuiModalHeaderTitle>Modal title</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>{formSample}</EuiModalBody>

          <EuiModalFooter>
            <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

            <EuiButton onClick={handleLogin} fill>
              Login
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
  return (
    <div>
      

      {modal}
    </div>
  );
};

export default LoginModal;