// /api/new
import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = MongoClient.connect('mongodb+srv://new_user:quAXv4Ayja4tQkkb@cluster0.7u7y9.mongodb.net/mulakat?retryWrites=true&w=majority');
        const db = (await client).db();

        const meetupsCollection = db.collection('mulakat');

        await meetupsCollection.insertOne(data);

        (await client).close();

        res.status(201).json({ message: 'Mulakat added!' });
    }
}

export default handler;