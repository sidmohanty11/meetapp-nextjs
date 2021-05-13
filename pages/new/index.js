import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Layout from '../../components/layout/Layout';

const NewMeetUp = () => {
    const addMeetupHandler = (data) => {
        console.log(data);
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetUp;
