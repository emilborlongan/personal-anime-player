import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Watch from '@/pages/Watch'

import styles from '@/styles/App.module.scss';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        Personal Anime Player
      </header>

      <main className={styles.main}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:episodeId" element={<Watch />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}
