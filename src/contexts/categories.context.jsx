import {createContext, useState, useEffect } from 'react';

import { getCollectionAndDocuments } from '../utils/firebase/firebase.util';

export const CategoriesContext = createContext({
  categoryMap: {},
});

export const CategoriesProvider = ({children}) =>{

  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(()=>{
    const getCategoriesMap = async ()=>{
      const categoryMap = await getCollectionAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  },[])

  const value = {categoriesMap};
  return(
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}