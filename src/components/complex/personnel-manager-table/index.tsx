import React, {useContext, useRef} from 'react';
import personnelTableStyles from './personnel-manager-table.module.scss';
import {Subscription} from "../../../utils/consts";
import {DataContext} from "../../../providers/data-provider/data-provider";

const PersonnelManagerTable = () => {
    const prevSelect = useRef<HTMLTableRowElement | null>(null);
    const {data} = useContext(DataContext);

    const getSubscriptionValue = (subscription: Subscription)=>{
        switch (subscription){
            case Subscription.Subscribed:
                return "Subscribed";
            case Subscription.NotSubscribed:
                return "Not Subscribed";
            default:
                return "Other";
        }
    }

    const selectedRow = (e: React.MouseEvent<HTMLTableRowElement>)=>{
        let prevElement = prevSelect.current;
        if(prevElement){
            prevElement.classList.toggle(personnelTableStyles.active, false)
        }
        let currentElement = e.currentTarget;
        currentElement.classList.toggle(personnelTableStyles.active, true)
        prevSelect.current = currentElement;
    }

    return (
        <fieldset>
            <table className={personnelTableStyles.table}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Subscription</th>
                    <th>Employment</th>
                </tr>
                <tbody>
                {
                    data.map(elem=>(
                        <tr key={elem.id} onClick={selectedRow}>
                            <td>{elem.name}</td>
                            <td>{elem.age}</td>
                            <td>{getSubscriptionValue(elem.subscription)}</td>
                            <td>{elem.employed ? "Employed": "Unemployed"}</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </fieldset>
    );
};

export default PersonnelManagerTable;