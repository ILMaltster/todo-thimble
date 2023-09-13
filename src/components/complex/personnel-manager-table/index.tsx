import React, {useContext, useRef} from 'react';
import personnelTableStyles from './personnel-manager-table.module.scss';
import {Subscription} from "../../../utils/consts";
import {DataContext} from "../../../providers/data-provider/data-provider";
import {TableSelectionContext} from "../../../providers/table-selection-provider";

const PersonnelManagerTable = () => {
    const prevSelect = useRef<HTMLTableRowElement | null>(null);
    const {data} = useContext(DataContext);
    const {setSelectedRowId} = useContext(TableSelectionContext);

    const getSubscriptionValue = (subscription: Subscription)=>{
        const parsedType = Number(subscription);
        switch (parsedType){
            case Subscription.Subscribed:
                return "Subscribed";
            case Subscription.NotSubscribed:
                return "Not Subscribed";
            default:
                return "Other";
        }
    }

    const selectedRow = (e: React.MouseEvent<HTMLTableRowElement>, elemId: number)=>{
        let prevElement = prevSelect.current;
        if(prevElement){
            prevElement.classList.toggle(personnelTableStyles.active, false)
        }
        let currentElement = e.currentTarget;
        currentElement.classList.toggle(personnelTableStyles.active, true)
        prevSelect.current = currentElement;
        setSelectedRowId(elemId);
    }

    return (
        <fieldset>
            <table className={personnelTableStyles.table}>
                <thead>
                    <tr>
                        <td width="40%">Name</td>
                        <td width="10%">Age</td>
                        <td width="30%">Subscription</td>
                        <td width="20%">Employment</td>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(elem=>(
                        <tr key={elem.id} onClick={e => selectedRow(e, elem.id)}>
                            <td width="40%">{elem.name}</td>
                            <td width="10%">{elem.age}</td>
                            <td width="30%">{getSubscriptionValue(elem.subscription)}</td>
                            <td width="20%">{elem.employed ? "Employed": "Unemployed"}</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </fieldset>
    );
};

export default PersonnelManagerTable;