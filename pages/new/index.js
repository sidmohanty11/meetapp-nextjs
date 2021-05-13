import React from 'react';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUp = () => {
    const router = useRouter();
    const addMeetupHandler = async (data) => {
        const res = await fetch('/api/new', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const meetdata = await res.json();
        router.push('/');
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetUp;
