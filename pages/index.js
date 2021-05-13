import React from 'react';
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
    {
        id: 'm1',
        title: 'Our First meet!',
        image: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        address: 'Our FAV spot!',
        description: 'When I fell for her!'
    },
    {
        id: 'm2',
        title: 'When I saw her face!',
        image: 'https://images.unsplash.com/photo-1496433998859-da21e208bd42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        address: 'Hills',
        description: 'When I fell for her!'
    },
    {
        id: 'm3',
        title: 'When universe collides!',
        image: 'https://images.unsplash.com/photo-1542311222-5632cf0e6c51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        address: 'Beach',
        description: 'When I fell for her!'
    }, {
        id: 'm4',
        title: 'We grew old together!',
        image: 'https://images.unsplash.com/photo-1616362258595-28a25ece05f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        address: 'Cafe',
        description: 'When I fell for her!'
    },
];

const HomePage = () => {
    return (
        <MeetupList meetups={MEETUPS} />
    )
}

export default HomePage;
