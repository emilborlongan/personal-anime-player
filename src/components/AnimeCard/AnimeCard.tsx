import { Card, Image, Text } from '@mantine/core';
import styles from './AnimeCard.module.scss';

interface Props {
  anime: {
    id: string;
    japaneseTitle: string;
    image: string;
  };
}

export default function AnimeCard({ anime }: Props) {
  return (
    <Card className={styles.card} shadow="sm" padding="md" radius="md">
      <Card.Section>
        <Image src={anime.image} alt={anime.japaneseTitle} height={300} fit="cover" />
      </Card.Section>
      <Text className={styles.title}>{anime.japaneseTitle}</Text>
    </Card>
  );
}
