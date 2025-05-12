import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  VideoPlayer  from '@/components/VideoPlayer/VideoPlayer';

export default function Watch() {
    const { episodeId } = useParams();
    const [videoUrl, setVideoUrl] = useState('https://hianime.to/watch/the-apothecary-diaries-season-2-19429?ep=131713');

    /* useEffect(() => {
        const fetchEpisode = async () => {
            const res = await fetch(`/api/watch/${episodeId}`);
            const data = await res.json();
            setVideoUrl(data.sources[0].url); // pick best quality source
        };
        fetchEpisode();
    }, [episodeId]); */

    return videoUrl ? <VideoPlayer url={'https://hianime.to/watch/the-apothecary-diaries-season-2-19429?ep=131713'} /> : <div>Loading...</div>;
}
