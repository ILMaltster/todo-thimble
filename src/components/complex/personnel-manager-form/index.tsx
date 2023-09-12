import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from 'react';
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
import {insertData} from "../../../providers/data-provider/action-creators";

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
    const {dispatch} = useContext(DataContext);

    useEffect(()=>{
        console.log(formData);
    }, [formData])

    const formOnSubmitHandler = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(insertData(formData));
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        let [name, value] = [e.target.name, e.target.value as any];
        if('checked' in e.target) {
            value = e.target.checked;
        }


        setFormData(prevState => ({...prevState, [name]: value}));
    }

    return (
        <form onSubmit={formOnSubmitHandler}>
            <fieldset className={personnelManagerFormStyles.wrapper}>
                <legend>Insert Row</legend>
                <TextInput name="name" value={formData.name} onChange={onChangeInputHandler}/>
                <NumberInput name="age" value={formData.age} onChange={onChangeInputHandler}/>
                <Select name="subscription" value={formData.subscription} onChange={onChangeInputHandler}>
                    <option>Subscribed</option>
                    <option>Not Subscribed</option>
                    <option>Other</option>
                </Select>
                <Checkbox name="employed" checked={formData.employed} onChange={onChangeInputHandler} title={"Employed"}/>
                <Button type="submit">Insert</Button>
                <hr/>
                <SwitchInput onChange={e => toggleLightTheme(e.target.checked)} title={"Mode"}/>
                <Button type="button">Delete</Button>
            </fieldset>
        </form>
    );
};

export default PersonnelManagerForm;