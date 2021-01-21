import React, { useState, useEffect } from "react";

import './adlist.css';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';

const Ad = props => {

  const style = {
    color: 'white'
  };
    const initialAdState = {
      id: null,
      title: "",
      description: "",
      published: false
    };
    const [title, setTitle] = useState(initialAdState);
    const [message, setMessage] = useState("");

    useEffect(() => {
      setTitle(props.phone);
    
  }, []);
    

    return (
      <div>
 
        <MDBCard>
          <MDBCardImage
            top
            src={props.smallpic}
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='elegant-color white-text rounded-bottom' style={style}>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='white-text' />
            </a>
            <MDBCardTitle>{props.title}</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              {props.phone}
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
     
    



      
</div>
    )

}
export default Ad;