import React from 'react';
import appStyles from './app.module.scss';
import PersonnelManagerTable from "./components/complex/personnel-manager-table";
import PersonnelManagerForm from "./components/complex/personnel-manager-form";
function App() {


    return (
        <main className={appStyles.main}>
            <PersonnelManagerForm/>
            <PersonnelManagerTable/>
        </main>
    );
}

export default App;
