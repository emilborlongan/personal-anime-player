import express from 'express';
import cors from 'cors';
import { ANIME, StreamingServers } from '@consumet/extensions';

const app = express();
const port = 3001;

app.use(cors());

console.error({ ANIME });


const providerNames = ['Gogoanime', 'NineAnime', 'AnimePahe', 'Zoro', 'AnimeFox', 'AnimeDrive', 'Anify', 'Crunchyroll', 'Bilibili', 'Marin', 'AnimeSaturn', 'AnimeUnity', 'MonosChinos']

app.get('/', (req, res) => {
    res.send('Server is runnign properly!');
});

app.get('/api/trending', async (req, res) => {
    try {

        const workingProviders = providerNames
            .map((name) => {
                const ProviderClass = (ANIME)[name];
                if (!ProviderClass) {
                    console.warn(`${name} is not available in ANIME`);
                    return null;
                }

                const instance = new ProviderClass();
                return instance.isWorking ? name : null;
            })
            .filter(Boolean);

        console.log('Working providers:', workingProviders);

        const animeProvider = new ANIME.Zoro();
        console.log({ animeProvider })
        const animeList = await animeProvider.fetchTopAiring(1);
        console.log({ animeList })
        res.json({ message: animeList });


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch trending anime' });
    }
});

app.get('/api/watch/:id', async (req, res) => {
    try {
        const animeProvider = new ANIME.Zoro();
        console.log('params ', req.params.id.toString())
        const result = await animeProvider.fetchEpisodeSources(req.params.id.toString());
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch episode source' });
    }
});


app.listen(port, () => {
    console.log(`GogoAnime proxy running at http://localhost:${port}`);
});
