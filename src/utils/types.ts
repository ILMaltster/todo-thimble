import {Subscription} from "./consts";

export type TEmployee = {
    id: number | string;
    name: string;
    age: number;
    subscription: Subscription;
    employed: boolean;
}

export type TThemeVariants = "dark" | "light";

export interface IInsertDataAction{
    type: "insert",
    payload: TEmployee
}

export interface IDeleteDataAction{
    type: "delete",
    payload: number
}

export interface ISetDataAction{
    type: "set",
    payload: TEmployee[]
}


export type TEmployeesReducerActions = IInsertDataAction | IDeleteDataAction | ISetDataAction;