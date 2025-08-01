import React from 'react';
import CreateNewWorkSpace from './components/CreateNewWorkSpace';
import MyWorkSpaces from './components/MyWorkSpaces';
import { getUserWorkSpaces } from '@/lib/getUserWorkSpaces';


const DashboardHomePage = async () => {

    const data = await getUserWorkSpaces();
    
    return (
        <div>
            
            <div className='border p-10 rounded-2xl border-blue-400 bg-gradient-to-r from-blue-200 to-blue-100'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h1 className='text-3xl font-semibold'>Work Places</h1>
                      <CreateNewWorkSpace/>
    
                </div>

                <div className='divider '>

                </div>
              
                <div className='mt-6'>
                     <MyWorkSpaces data={data}/>
                </div>
              
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