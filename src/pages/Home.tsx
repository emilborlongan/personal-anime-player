import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Title } from '@mantine/core';
import AnimeCard from '@/components/AnimeCard/AnimeCard';
import styles from './Home.module.scss';

interface Anime {
  id: string;
  japaneseTitle: string;
  image: string;
}

export default function Home() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/trending');
        console.log({res});
        setAnimeList(res.data.message.results);
      } catch (err) {
        console.error('Failed to fetch trending anime:', err);
      }
    };
  
    fetchTrending();
  }, []);

  return (
    <Container>
      <Title order={2} className={styles.title}>Trending Anime</Title>
      <div className={styles.grid}>
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </Container>
  );
}
