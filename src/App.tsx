import { Container } from '@mantine/core';
import styles from '@/styles/App.module.scss';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        Personal Anime Player
      </header>

      <main className={styles.main}>
        <Container>
          {/* Routing or content goes here */}
          <p>Welcome! Start building your anime player here.</p>
        </Container>
      </main>
    </>
  );
}
