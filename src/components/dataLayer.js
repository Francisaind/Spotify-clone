import React, { createContext,useContext, useReducer } from 'react';

export const DataLayerContext= createContext();

export const DataLayer=({initialValue,reducer,children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialValue)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue=()=>useContext(DataLayerContext);