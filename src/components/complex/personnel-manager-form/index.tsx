import React, {ChangeEvent, FormEvent, useCallback, useContext, useMemo, useState} from 'react';
import personnelManagerFormStyles from './personnel-manager-form.module.scss';
import TextInput from "../../ui/inputs/text";
import NumberInput from "../../ui/inputs/number";
import Select from "../../ui/select";
import Checkbox from "../../ui/inputs/checkbox";
import Button from "../../ui/button";
import SwitchInput from "../../ui/inputs/switch";
import {ThemeContext} from "../../../providers/theme-provider";
import {TEmployee} from "../../../utils/types";
import {Subscription} from "../../../utils/consts";
import {DataContext} from "../../../providers/data-provider/data-provider";
import {deleteData, insertData} from "../../../providers/data-provider/action-creators";
import {TableSelectionContext} from "../../../providers/table-selection-provider";

const initialFormValue: TEmployee = {
    id: 0,
    name: "Name",
    age: 18,
    employed: true,
    subscription: Subscription.Subscribed,
}

const PersonnelManagerForm = () => {
    const [formData, setFormData] = useState<TEmployee>(initialFormValue);
    const {toggleLightTheme} = useContext(ThemeContext);
    const {dataDispatch} = useContext(DataContext);
    const {selectedRowId} = useContext(TableSelectionContext);

    const formOnSubmitHandler = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const uniqId = Math.random();
        console.log(formData);
        dataDispatch(insertData({...formData, id: uniqId}));
        setFormData(initialFormValue)
    }

    const onChangeInputHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        let [name, value] = [e.target.name, e.target.value as any];
        console.log(name, value);
        if('checked' in e.target && 'checkbox' === e.target.type) {
            value = e.target.checked;
        }
        else if('number' === e.target.type){
            value = Number(e.target.value);
        }
        setFormData(prevState => ({...prevState, [name]: value}));
    }, [setFormData])

    const changeTheme = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        toggleLightTheme(e.target.checked)
    }, [])

    const deleteSelectedRow = useCallback(() =>
        dataDispatch(deleteData(selectedRowId))
        , [selectedRowId]);

    const SelectOptions = useMemo(()=>(
        <>
            <option value={Subscription.Subscribed}>Subscribed</option>
            <option value={Subscription.NotSubscribed}>Not Subscribed</option>
            <option value={Subscription.Other}>Other</option>
        </>
    ), [])

    return (
        <form onSubmit={formOnSubmitHandler}>
            <fieldset className={personnelManagerFormStyles.wrapper}>
                <legend>Insert Row</legend>
                <TextInput name="name" value={formData.name} onChange={onChangeInputHandler}/>
                <NumberInput min={18} name="age" value={formData.age} onChange={onChangeInputHandler}/>
                <Select name="subscription" value={formData.subscription} onChange={onChangeInputHandler}>
                    {SelectOptions}
                </Select>
                <Checkbox name="employed" checked={formData.employed} onChange={onChangeInputHandler} title={"Employed"}/>
                <Button type="submit">Insert</Button>
                <hr/>
                <SwitchInput onChange={changeTheme} title={"Mode"}/>
                <Button type="button" onClick={deleteSelectedRow}>Delete</Button>
            </fieldset>
        </form>
    );
};

export default PersonnelManagerForm;