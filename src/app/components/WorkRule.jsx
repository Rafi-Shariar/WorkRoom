import React from 'react';

const WorkRule = () => {
    return (
        <div>
            {/* <h1 className='text-2xl'>Create Workspaces ·  Manage Teams ·  Assign Tasks ·  Share Updates</h1> */}

            <section className='grid grid-cols-1 sm:grid-cols-4 justify-items-center items-center max-w-5xl mx-auto gap-6'>
                <div className='border rounded-xl border-blue-200 max-w-[250px] h-[200px] p-6 bg-gradient-to-br from-blue-50 flex flex-col justify-between'>
                    <h1 className='bg-blue-500 text-2xl font-semibold text-white p-3 rounded-full w-12 h-12 flex justify-center items-center'> <span>1</span></h1>
                    <h2 className='text-3xl mt-6 text-gray-700'>Create Workspaces</h2>
                </div>

                <div className='border rounded-xl border-blue-200 max-w-[250px] h-[200px] p-6 bg-gradient-to-br from-blue-50 flex flex-col justify-between'>
                    <h1 className='bg-blue-500 text-2xl font-semibold text-white p-3 rounded-full w-12 h-12 flex justify-center items-center'> <span>2</span></h1>
                    <h2 className='text-3xl mt-6 text-gray-700'>Manage Your Teams</h2>
                </div>

                <div className='border rounded-xl border-blue-200 max-w-[250px] h-[200px] p-6 bg-gradient-to-br from-blue-50 flex flex-col justify-between'>
                    <h1 className='bg-blue-500 text-2xl font-semibold text-white p-3 rounded-full w-12 h-12 flex justify-center items-center'> <span>3</span></h1>
                    <h2 className='text-3xl mt-6 text-gray-700'>Assign All Tasks</h2>
                </div>

                <div className='border rounded-xl border-blue-200 max-w-[250px] h-[200px] p-6 bg-gradient-to-br from-blue-50 flex flex-col justify-between'>
                    <h1 className='bg-blue-500 text-2xl font-semibold text-white p-3 rounded-full w-12 h-12 flex justify-center items-center'> <span>4</span></h1>
                    <h2 className='text-3xl mt-6 text-gray-700'>Share Recent Updates</h2>
                </div>

            </section>

        </div>
    );
};

export default WorkRule;