import { useState, useEffect, useReducer, createContext } from "react";
import { dataReducer } from "./reducers/data";
import { maplayersReducer } from "./reducers/maplayers";
// Import Data
import { layers } from "../components/Data/layerLists";

// Initial States
const initialState = {
    layers: layers,
    data: ""
};

// Context
const LayerContext = createContext({});

// Reducer Functions
const combineReducers = (...reducers) => (state, action) => {
    for (let i=0; i<reducers.length; i++) {
        state = reducers[i](state, action);
    }
    return state;        
}

// Layer Context Providers
const LayerProvider = ({children}) => {
    const[state, dispatch] = useReducer(combineReducers(
      maplayersReducer, 
      dataReducer
    ), initialState);
    const value = {state, dispatch};
    return <LayerContext.Provider value={value}>{children}</LayerContext.Provider>
}


export {LayerContext, LayerProvider}