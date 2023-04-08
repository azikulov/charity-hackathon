import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Board } from '@/components/Board';
import { Footer } from '@/components/Footer';

export default function BoardPage() {
  return (
    <Layout>
      <Header />
      <div className='mt-6' />

      <main className='container flex flex-col gap-y-6'>
        {Array(8)
          .fill(5)
          .map((_, idx) => (
            <Board key={idx} />
          ))}

        <div className='mb-12' />
      </main>

      <Footer />
    </Layout>
  );
}
