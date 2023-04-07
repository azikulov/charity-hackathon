import Link from 'next/link';
import Image from 'next/image';

import { Layout } from '@/components/Layout';

export default function BoardPage() {
  return (
    <Layout>
      <header className='container py-3 flex items-center justify-between'>
        <Link
          href='#'
          className='inline-block text-2xl font-neue-plain text-[#222527] italic'
        >
          C&DC
        </Link>

        <nav className='flex gap-6'>
          <Link
            href='/'
            className='inline-block text-[#005BBB] border-b-2 border-b-[#005BBB] font-bold'
          >
            Главная
          </Link>
          <Link href='#' className='inline-block font-light text-[#222527]'>
            Доска обьявлений
          </Link>
        </nav>

        <Link
          href='#'
          className='flex items-center gap-x-3 py-1 px-4 rounded border border-[#005BBB]'
        >
          <span className='mt-[2px] italic  font-light text-[#005BBB]'>
            Внести донат
          </span>
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
          >
            <circle cx='16' cy='16' r='16' fill='#005BBB' />
            <path d='M10 22L22 10M22 10H12.8696M22 10V18.3478' stroke='white' />
          </svg>
        </Link>
      </header>

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
