import React, { Fragment, useState, useEffect, useContext } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { EuiSuperSelect, EuiText, EuiImage } from '@elastic/eui';

import { ReactiveBase, CategorySearch } from '@appbaseio/reactivesearch';
import './LeftSearch.css';

import { getList, getCellsFromBrand } from "../services/brand.service";

import { store } from '../store.js';





export default function LeftSearch() {

  const [list, setList] = useState([]);

  const [value, setValue] = useState();

  const [opts, setOpts] = useState([]);

  const globalState = useContext(store);
 
    
    const onChange = (value) => {
      setValue(value);
      console.log("GS: " + globalState);
      const { dispatch } = globalState;
      dispatch({ type: 'brandchange', payload: value });
      //getCellsFromBrand(value).then(x=>console.log(x));
    };
  
    useEffect(() => {
      let mounted = true;
      let o = [{}];
      let i = 0;
      getList()
        .then(items => {
          if(mounted) {
            setList(items);
            console.log("XXX");
            for (i=0;i<items.length;i++) {
              //console.log(items)
              o.push({
                value: items[i].brand,
                inputDisplay: items[i].brand,
                dropdownDisplay: (
                  <Fragment>
                    <EuiImage
                    hasShadow
                    size={30}
                    caption=""
                    alt="Accessible image alt goes here"
                    url="https://source.unsplash.com/1000x1000/?Nature"
                  />
                    <strong>{items[i].brand}</strong>
                  </Fragment>
                ),
              });
            }
            
            console.log(o.length);
            
     
            
          }
        })
        
        setOpts(o);;
      return () => mounted = false;
    }, [])

    

    

  return (
    
    <div>
    <EuiSuperSelect
    
      options={opts}
      valueOfSelected={value}
      onChange={(value) => onChange(value)}
      itemLayoutAlign="top"
      hasDividers
    />
    


  </div>
  
  );
}




