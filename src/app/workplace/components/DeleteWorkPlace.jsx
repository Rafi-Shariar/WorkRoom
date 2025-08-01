
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteWorkPlace = ({id}) => {

    const router = useRouter();
    
    const handleDelete = async() => {
         const res = await fetch(`http://localhost:3000/api/workplace/${id}`, {
            method: "DELETE",
        });

        router.replace('/dashboard')

      
    }
    

    return (
        <button onClick={handleDelete} className='btn bg-red-700 rounded-full px-10 text-white'>Delete Work Space</button>
    );
};

export default DeleteWorkPlace;