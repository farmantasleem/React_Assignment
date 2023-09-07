import {
  compose,
    legacy_createStore,
  } from "redux";
import reducer from "./reducer";


  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 
  
  export const store = legacy_createStore(
    reducer,
    composeEnhancers()
  );
  