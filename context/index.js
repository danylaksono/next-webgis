import { useState, useEffect, useReducer, createContext } from "react";
import { user } from "./reducers/user";
import { maplayers } from "./reducers/maplayers";
// Import Data
import { layers } from "../components/Data/layerLists";

// Initial States
const initialState = {
    layers: layers,
};

// Context
const LayerContext = createContext({});
const DataContext = createContext({});

// Reducer Functions
const combineReducers = (...reducers) => (state, action) => {
    for (let i=0; i<reducers.length; i++) {
        state = reducers[i](state, action);
    }
    return state;        
}

// Layer Context Providers
const LayerProvider = ({children}) => {
    const[state, dispatch] = useReducer(combineReducers(maplayers), initialState);
    const value = {state, dispatch};
    return <LayerContext.Provider value={value}>{children}</LayerContext.Provider>
}

// Data Context Providers
const DataProvider = ({children}) => {
    const[state, dispatch] = useReducer(combineReducers(user), initialState);
    const value = {state, dispatch};
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}


export {LayerContext, DataContext, LayerProvider, DataProvider}