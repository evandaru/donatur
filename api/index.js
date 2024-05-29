import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.json());

app.post('/api', async function (req, res) {
    try {
        const response = await axios.post(
            'https://api.notion.com/v1/databases/f943b13338d643b3b91d9df822f1ed06/query',
            req.body,  // data yang dikirimkan dari client
            {
                headers: {
                    Authorization: 'Bearer secret_dDkyTm301ESI6KmEYwLvZcoMrWWRqC9VRsxHftCwa6A',
                    accept: 'application/json',
                    'Notion-Version': '2022-06-28',
                    'content-type': 'application/json',
                },
            }
        );

        // Mengembalikan hasil dari permintaan ke Notion
        res.json(response.data);
    } catch (error) {
        console.error('Error making request to Notion API:', error);
        res.status(500).json({ error: 'Error making request to Notion API' });
    }

});

export default app;