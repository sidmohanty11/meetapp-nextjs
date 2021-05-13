import React from 'react';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const DetailsPage = (props) => {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            description={props.meetupData.description}
            address={props.meetupData.address}
        />
    )
}

export async function getStaticPaths() {
    const client = MongoClient.connect('mongodb+srv://new_user:quAXv4Ayja4tQkkb@cluster0.7u7y9.mongodb.net/mulakat?retryWrites=true&w=majority');

    const db = (await client).db();

    const meetupsCollection = db.collection('mulakat');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    (await client).close();
    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = MongoClient.connect('mongodb+srv://new_user:quAXv4Ayja4tQkkb@cluster0.7u7y9.mongodb.net/mulakat?retryWrites=true&w=majority');

    const db = (await client).db();

    const meetupsCollection = db.collection('mulakat');

    const selected = await meetupsCollection.findOne({ _id: ObjectId(meetupId)});

    return {
        props: {
            meetupData: {
                id: selected._id.toString(),
                title: selected.title,
                address: selected.address,
                image: selected.image,
                description: selected.description,
            }
        }
    }
}

export default DetailsPage;
