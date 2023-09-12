import React, {createContext, FC, Reducer, useEffect, useReducer} from 'react';
import {TEmployee, TEmployeesReducerActions} from "../../utils/types";
import {setData} from "./action-creators";

interface IDataContextValue{
    data: TEmployee[];
    dispatch: React.Dispatch<TEmployeesReducerActions>;
}

export const DataContext = createContext<IDataContextValue>({data: [], dispatch: ()=>{}})

const reducer: Reducer<TEmployee[], TEmployeesReducerActions> = (
    state: TEmployee[],
    action: TEmployeesReducerActions
)=>{
    const {type, payload} = action;
    switch(type){
        case "insert":
            window.localStorage.setItem("data", JSON.stringify(payload))
            return [...state, payload];
        case "delete":
            const newValue = state.filter(elem=>elem.id !== payload)
            window.localStorage.setItem("data", JSON.stringify(newValue))
            return newValue;
        case "set":
            return payload;
        default:
            return state;
    }
}

const DataProvider: FC<React.PropsWithChildren> = ({children}) => {
    const [employees, dispatch] = useReducer(reducer,[])

    useEffect(()=>{
        const dataString = window.localStorage.getItem("data");
        if(dataString){
            const parsedData = JSON.parse(dataString);
            dispatch(setData(parsedData))
        }
    }, [])

    const contextValue = {
        data: employees,
        dispatch
    }

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;