import {IDeleteDataAction, IInsertDataAction, ISetDataAction, TEmployee} from "../../utils/types";


export const insertData = (value: TEmployee): IInsertDataAction=>{
     return {type: "insert", payload: value}
 }
export const deleteData = (value: number): IDeleteDataAction=>{
    return {type: "delete", payload: value}
}
export const setData = (value: TEmployee[]): ISetDataAction=>{
    return {type: "set", payload: value}
}