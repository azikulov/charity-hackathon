import { useEffect, useState } from 'react';

import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Board } from '@/components/Board';
import { Footer } from '@/components/Footer';

import type { IBoard } from '@/components/Board/types';

type Board = IBoard[] | 'loading' | 'error';

export default function BoardPage() {
  const [boards, setBoards] = useState<Board>('loading');

  function fetchBulletinBoards() {
    fetch('https://charity-hackathon.herokuapp.com/api/bulletin_boards/')
      .then((res) => res.json())
      .then((data) => setBoards(data))
      .catch(() => setBoards('error'));
  }

  useEffect(() => {
    fetchBulletinBoards();
  }, []);

  return (
    <Layout>
      <Header />
      <div className='mt-6' />

      <main className='container flex flex-col gap-y-6'>
        {boards === 'loading' ? (
          <h1>Loading...</h1>
        ) : boards === 'error' ? (
          <h1>Error</h1>
        ) : (
          boards.map((board, index) => <Board {...board} key={index} />)
        )}

        <div className='mb-12' />
      </main>

      <Footer />
    </Layout>
  );
}
