import React, {useRef} from 'react';
import {Subscription, TEmployee} from "../../../utils/types";
import personnelTableStyles from './personnel-table.module.scss';

const PersonnelTable = () => {
    const prevSelect = useRef<HTMLTableRowElement | null>(null);
    let employess: TEmployee[] = [
        {id: 1, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 2, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
        {id: 3, name: "test", subscription: Subscription.Subscribed, age: 20, employed: true},
    ]

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
                    employess.map(elem=>(
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

export default PersonnelTable;