import React, {useContext, useEffect, useState} from 'react';
import personnelManagerFormStyles from './personnel-manager-form.module.scss';
import TextInput from "../../ui/inputs/text";
import NumberInput from "../../ui/inputs/number";
import Select from "../../ui/select";
import Checkbox from "../../ui/inputs/checkbox";
import Button from "../../ui/button";
import SwitchInput from "../../ui/inputs/switch";
import {ThemeContext} from "../../../providers/theme-provider";

const PersonnelManagerForm = () => {
    const [number, setnumber] = useState<number | string>(0);
    const {toggleLightTheme} = useContext(ThemeContext);

    useEffect(()=>{
        console.log(number);
    }, [number])

    return (
        <form>
            <fieldset className={personnelManagerFormStyles.wrapper}>
                <legend>Insert Row</legend>
                <TextInput value="Name"/>
                <NumberInput value={number} onChange={e=>setnumber(e.target.value)}/>
                <Select>
                    <option>Subscribed</option>
                    <option>Not Subscribed</option>
                    <option>Other</option>
                </Select>
                <Checkbox title={"Employed"}/>
                <Button>Insert</Button>
                <hr/>
                <SwitchInput onChange={e => toggleLightTheme(e.target.checked)} title={"Mode"}/>
                <Button>Delete</Button>
            </fieldset>
        </form>
    );
};

export default PersonnelManagerForm;