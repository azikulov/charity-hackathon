import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';

export default function BoardPage() {
  return (
    <Layout>
      <Header />

      <main className='container'></main>

      <footer className='bg-[#222527]'>
        <div className='container py-12 flex justify-between'>
          <div className='flex flex-col justify-between'>
            <div className='grid gap-y-5'>
              <Link href='/' className='text-2xl italic text-white'>
                C&DC
              </Link>

              <p className='text-white'>
                Лучший в свом деле <br /> - да, король на месте
              </p>
            </div>

            <div className='text-white'>by al1m_design</div>
          </div>

          <div className='flex gap-12'>
            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Алтай</div>
              <div className='text-white'>- Backend Developer</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@h_eimu</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 073 6981</div>
            </div>

            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Алим</div>
              <div className='text-white'>- UI/UX Дизайнер</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@alimdesign</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 103 6410</div>
            </div>

            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Маулен</div>
              <div className='text-white'>- Frontend Developer</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@azikulov</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 400 6125</div>
            </div>

            <div className=''>
              <div className='font-bold mb-1 text-xl text-white'>Марк</div>
              <div className='text-white'>- Backend Developer</div>

              <hr className='bg-white my-6' />

              <div className='font-bold mb-1 text-xl text-white'>Telegram</div>
              <div className='text-white'>@Samangelof</div>

              <br />

              <div className='font-bold mb-1 text-xl text-white'>Phone</div>
              <div className='text-white'>+7 (747) 675 8154</div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
