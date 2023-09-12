import React, {useEffect, useState} from 'react';
import appStyles from './app.module.scss';
import Button from "./components/ui/button";
import TextInput from "./components/ui/inputs/text";
import NumberInput from "./components/ui/inputs/number";
import Select from "./components/ui/select";
import Checkbox from "./components/ui/inputs/checkbox";
import SwitchInput from "./components/ui/inputs/switch";
import PersonnelTable from "./components/complex/personnel-table";
function App() {
    const [number, setnumber] = useState<number | string>(0);

    useEffect(()=>{
        console.log(number);
    }, [number])

    return (
        <main className={appStyles.main}>
            <form>
                <fieldset>
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
                    <SwitchInput/>
                    <Button>Delete</Button>
                </fieldset>
            </form>
            <PersonnelTable/>



            {/*<Button>*/}
            {/*  Я кнопка*/}
            {/*</Button>*/}
            {/*<TextInput/>*/}
            {/*<Select>*/}
            {/*    <option value="value1">Значение 1</option>*/}
            {/*    <option value="value2" selected>Значение 2</option>*/}
            {/*    <option value="value3">Значение 3</option>*/}
            {/*</Select>*/}
            {/*<Checkbox title="Eployed"/>*/}
            {/*<SwitchInput/>*/}
        </main>
    );
}

export default App;
