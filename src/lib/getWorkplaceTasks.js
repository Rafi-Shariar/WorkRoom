import React from 'react';
import dbConnect, { collectionNames } from './dbConnect';

const getWorkplaceTasks =  async (id) => {

    const tasksCollection = dbConnect(collectionNames.taskCollection);
    const result = tasksCollection.find({workplaceID : id}).sort({deadline : -1}).toArray();

    return result || [];
 

};

export default getWorkplaceTasks;