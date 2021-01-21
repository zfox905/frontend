import React, { useState, useEffect, useContext } from "react";
import AdDataService from "../services/ad.service";
import Ad from "./ad";
import { Link } from "react-router-dom";
import './adlist.css';

import { getList, getCellsFromBrand } from "../services/brand.service";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

import { store } from '../store.js';

const AdList = (brand) => {
  const [ads, setAds] = useState([]);
  const [currentAd, setCurrentAd] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const globalState = useContext(store);

  useEffect(() => {
      console.log("PRIMAM");
    retrieveAds();
  }, []);

  useEffect(() => {
    console.log("promenio se brand");
    console.log(globalState.state.brands[globalState.state.brands.length-1])
    getCellsFromBrand(globalState.state.brands[globalState.state.brands.length-1]).then(x=> {
      setAds(x);
      console.log(x);
    })
  
}, [globalState]);

  const retrieveAds = () => {
    AdDataService.getAll()
      .then(response => {
        setAds(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    
      <MDBContainer fluid> 
      <MDBRow>
          {ads &&
            ads.map((ad, index) => (
               
              <MDBCol md='2'>
                <Ad {...ad} key={index} />
                </ MDBCol >  
                 
              
            ))}
            </MDBRow>
        </MDBContainer>
  )

}

export default AdList;