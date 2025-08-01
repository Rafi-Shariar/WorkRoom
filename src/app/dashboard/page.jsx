import React from 'react';
import CreateNewWorkSpace from './components/CreateNewWorkSpace';
const DashboardHomePage = () => {


    return (
        <div>
            
            <div>
                Show My Work Spaces & Create Work Space
                <CreateNewWorkSpace/>
            </div>

            <div>
                If im in a team then show that team, 
                Else show nothing

            </div>

            <div></div>
        </div>
    );
};

export default DashboardHomePage;